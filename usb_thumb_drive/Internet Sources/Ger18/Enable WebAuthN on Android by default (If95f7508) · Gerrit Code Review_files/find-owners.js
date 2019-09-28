// Copyright (C) 2017 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

Gerrit.install(function(self) {
  // If context.popup API exists and popup content is small,
  // use the API and set useContextPopup,
  // otherwise, use pageDiv and set its visibility.
  var useContextPopup = false;
  var pageDiv = document.createElement('div');
  document.body.appendChild(pageDiv);
  function hideFindOwnersPage() {
    pageDiv.style.visibility = 'hidden';
  }
  function popupFindOwnersPage(context, change, revision, onSubmit) {
    const PADDING = 5;
    const LARGE_PAGE_STYLE = Gerrit.css(
        'visibility: hidden;' +
        'background: rgba(200, 200, 200, 0.95);' +
        'border: 3px solid;' +
        'border-color: #c8c8c8;' +
        'border-radius: 3px;' +
        'position: fixed;' +
        'z-index: 100;' +
        'overflow: auto;' +
        'padding: ' + PADDING + 'px;'
        );
    const BUTTON_STYLE = Gerrit.css(
        'background-color: #4d90fe;' +
        'border: 2px solid;' +
        'border-color: #4d90fe;' +
        'margin: 2px 10px 2px 10px;' +
        'text-align: center;' +
        'font-size: 8pt;' +
        'font-weight: bold;' +
        'color: #fff;' +
        '-webkit-border-radius: 2px;' +
        'cursor: pointer;'
        );
    const HTML_BULLET = '<small>&#x2605;</small>'; // a Black Star
    const HTML_IS_EXEMPTED =
        '<b>This change is Exempt-From-Owner-Approval.</b><br>';

    const HTML_NO_OWNER =
        '<b>No owner was found for changed files.</b>';
    const HTML_ONSUBMIT_HEADER =
        '<b>WARNING: Need owner Code-Review vote before submit.</b><hr>';
    const HTML_OWNERS_HEADER = '<hr><b>Owners in alphabetical order:</b><br>';
    const HTML_SELECT_REVIEWERS =
        '<b>Check the box before owner names to select reviewers, ' +
        'then click the "Apply" button.' +
        '</b><br><small>If owner-approval requirement is enabled, ' +
        'each file needs at least one Code-Review +1 vote from an owner. ' +
        'Owners listed after a file are ordered by their importance. ' +
        '(Or declare "<b><span style="font-size:80%;">' +
        'Exempt-From-Owner-Approval:</span></b> ' +
        '<i>reasons...</i>" in the Commit Message.)</small><br>';

    // Changed files are put into groups.
    // Each group has a unique list of owners and
    // belongs to one of the 5 types based on owner status.
    // Groups of a type are displayed in one HTML section.
    // Group type names are mapped to ordered numbers starting from 0.
    const GROUP_TYPE = {
        'NEED_REVIEWER':  0, // no owner in Reviewers list yet
        'NEED_APPROVAL':  1, // no owner Code-Review +1 yet
        'STAR_APPROVED':  2, // has '*', no need of owner vote
        'OWNER_APPROVED': 3, // has owner approval
        'HAS_NO_OWNER':   4, // no owner at all, only shown with other types
    };
    const NUM_GROUP_TYPES = 5;

    const HTML_GROUP_TYPE_HEADER = [
        '<hr><b>Files with owners but no owner is in the Reviewers list:</b><br>',
        '<hr><b>Files with owners but no Code-Review vote from an owner:</b><br>',
        '<hr><b>Files with owners but can be approved by anyone (*):</b><br>',
        '<hr><b>Files with +1 or +2 Code-Review vote from owners:</b><br>',
        '<hr><b>Files without any named owner:</b><br>',
    ];

    const GROUP_TYPE_DIV_ID = [
        'FindOwners:NeedReviewer',
        'FindOwners:NeedApproval',
        'FindOwners:StarApproved',
        'FindOwners:OwnerApproved',
        'FindOwners:HasNoOwner',
    ];

    const APPLY_BUTTON_ID = 'FindOwners:Apply';
    const CHECKBOX_ID = 'FindOwners:CheckBox';
    const HEADER_DIV_ID = 'FindOwners:Header';
    const OWNERS_DIV_ID = 'FindOwners:Owners';

    // Aliases to values in the context.
    const branch = change.branch;
    const changeId = change._number;
    const changeOwner = change.owner;
    const message = revision.commit.message;
    const project = change.project;

    var minVoteLevel = 1; // could be changed by server returned results.
    var reviewerId = {}; // map from a reviewer's email to account id.
    var reviewerVote = {}; // map from a reviewer's email to Code-Review vote.

    // addList and removeList are used only under applySelections.
    var addList = []; // remain emails to add to reviewers
    var removeList = []; // remain emails to remove from reviewers
    var needRefresh = false; // true if to refresh after checkAddRemoveLists

    function getElement(id) {
      return document.getElementById(id);
    }
    function httpGet(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          // skip special characters ")]}'\n"
          callback(!!xhr.responseText ?
                   JSON.parse(xhr.responseText.substring(5)) : {});
        }
      };
      xhr.send();
    }
    function httpError(msg, callback) {
      console.log('UNIMPLEMENTED: ' + msg);
      callback();
    }
    function restApiGet(url, callback) {
      self.restApi().get('/../..' + url).then(callback);
    }
    function restApiPost(url, data, callback) {
      self.restApi().post('/../..' + url, data).then(callback) ;
    }
    function restApiDelete(url, callback, errMessage) {
      self.restApi().delete('/../..' + url).then(callback).catch((e) => {
          alert(errMessage);
      });
    }
    function getReviewers(change, callBack) {
      restApiGet('/changes/' + change + '/reviewers', callBack);
    }
    function setupReviewersMap(reviewerList) {
      reviewerId = {};
      reviewerVote = {};
      reviewerList.forEach(function(reviewer) {
        if ('email' in reviewer && '_account_id' in reviewer) {
          reviewerId[reviewer.email] = reviewer._account_id;
          reviewerVote[reviewer.email] = 0;
          if ('approvals' in reviewer && 'Code-Review' in reviewer.approvals) {
            reviewerVote[reviewer.email] =
                parseInt(reviewer.approvals['Code-Review']);
            // The 'Code-Review' values could be "-2", "-1", " 0", "+1", "+2"
          }
        }
      });
      // Give CL author a default minVoteLevel vote.
      if (changeOwner != null &&
          'email' in changeOwner && '_account_id' in changeOwner &&
          (!(changeOwner.email in reviewerId) ||
           reviewerVote[changeOwner.email] == 0)) {
        reviewerId[changeOwner.email] = changeOwner._account_id;
        reviewerVote[changeOwner.email] = minVoteLevel;
      }
    }
    function checkAddRemoveLists() {
      // Gerrit.post and delete are asynchronous.
      // Do one at a time, with checkAddRemoveLists as callBack.
      for (var i = 0; i < addList.length; i++) {
        var email = addList[i];
        if (!(email in reviewerId)) {
          addList = addList.slice(i + 1, addList.length);
          // A post request can fail if given reviewer email is invalid.
          // Gerrit core UI shows the error dialog and does not provide
          // a way for plugins to handle the error yet.
          needRefresh = true;
          restApiPost('/changes/' + changeId + '/reviewers',
                      {'reviewer': email},
                      checkAddRemoveLists);
          return;
        }
      }
      for (var i = 0; i < removeList.length; i++) {
        var email = removeList[i];
        if (email in reviewerId) {
          removeList = removeList.slice(i + 1, removeList.length);
          needRefresh = true;
          restApiDelete('/changes/' + changeId +
                        '/reviewers/' + reviewerId[email],
                        checkAddRemoveLists,
                        'Cannot delete reviewer: ' + email);
          return;
        }
      }
      hideFindOwnersPage();
      if (needRefresh) {
        needRefresh = false;
        (!!Gerrit.refresh) ? Gerrit.refresh() : location.reload();
      }
      callServer(showFindOwnersResults);
    }
    function applyGetReviewers(reviewerList) {
      setupReviewersMap(reviewerList);
      checkAddRemoveLists(); // update and pop up window at the end
    }
    function hasStar(owners) {
      return owners.some(function(owner) {
        return owner == '*';
      });
    }
    function hasNamedOwner(owners) {
      return owners.some(function(owner) {
        return owner != '*';
      });
    }
    function hasOwnerReviewer(reviewers, owners) {
      return owners.some(function(owner) {
        return owner in reviewers;
      });
    }
    function hasOwnerApproval(votes, owners) {
      var foundApproval = false;
      for (var j = 0; j < owners.length; j++) {
        if (owners[j] in votes) {
          var v = votes[owners[j]];
          if (v < 0) {
            return false; // cannot have any negative vote
          }
          foundApproval |= v >= minVoteLevel;
        }
      }
      return foundApproval;
    }
    function isExemptedFromOwnerApproval() {
      return message.match(/(Exempted|Exempt)-From-Owner-Approval:/);
    }
    function showDiv(div, text) {
      div.style.display = 'inline';
      div.innerHTML = text;
    }
    function strElement(s) {
      var e = document.createElement('span');
      e.innerHTML = s;
      return e;
    }
    function br() {
      return document.createElement('br');
    }
    function hr() {
      return document.createElement('hr');
    }
    function newButton(name, action) {
      var b = document.createElement('button');
      b.appendChild(document.createTextNode(name));
      b.className = BUTTON_STYLE;
      b.onclick = action;
      return b;
    }
    function showJsonLines(args, key, obj) {
      showBoldKeyValueLines(args, key, JSON.stringify(obj, null, 2));
    }
    function showBoldKeyValueLines(args, key, value) {
      args.push(hr(), strElement('<b>' + key + '</b>:'), br());
      value.split('\n').forEach(function(line) {
        args.push(strElement(line), br());
      });
    }
    function showDebugMessages(result, args) {
      function addKeyValue(key, value) {
        args.push(strElement('<b>' + key + '</b>: ' + value + '<br>'));
      }
      args.push(hr());
      addKeyValue('changeId', changeId);
      addKeyValue('project', project);
      addKeyValue('branch', branch);
      addKeyValue('changeOwner.email', changeOwner.email);
      addKeyValue('Gerrit.url', Gerrit.url());
      addKeyValue('self.url', self.url());
      showJsonLines(args, 'changeOwner', change.owner);
      showBoldKeyValueLines(args, 'commit.message', message);
      showJsonLines(args, 'Client reviewers Ids', reviewerId);
      showJsonLines(args, 'Client reviewers Votes', reviewerVote);
      Object.keys(result).forEach(function(k) {
        showJsonLines(args, 'Server.' + k, result[k]);
      });
    }
    function showFilesAndOwners(result, args) {
      var sortedOwners = result.owners.map(
          function(ownerInfo) { return ownerInfo.email; });
      var groups = {}; // a map from group_name to
          // {'type': 0..(NUM_GROUP_TYPES-1),
          //  'size': num_of_files_in_this_group,
          //  'owners': space_separated_owner_emails}
      var header = emptyDiv(HEADER_DIV_ID);
      var groupTypeDiv = Array(NUM_GROUP_TYPES);
      for (var i = 0; i < NUM_GROUP_TYPES; i++) {
        groupTypeDiv[i] = emptyDiv(GROUP_TYPE_DIV_ID[i]);
      }
      addApplyButton();
      args.push(newButton('Cancel', hideFindOwnersPage));
      var ownersDiv = emptyDiv(OWNERS_DIV_ID);
      var numCheckBoxes = 0;
      var owner2boxes = {}; // owner name ==> array of checkbox id
      var owner2email = {}; // owner name ==> email address
      minVoteLevel =
          ('minOwnerVoteLevel' in result ? result.minOwnerVoteLevel : 1);

      function addApplyButton() {
        var apply = newButton('Apply', doApplyButton);
        apply.id = APPLY_BUTTON_ID;
        apply.style.display = 'none';
        args.push(apply);
      }
      function emptyDiv(id) {
        var e = document.createElement('div');
        e.id = id;
        e.style.display = 'none';
        args.push(e);
        return e;
      }
      function doApplyButton() {
        addList = [];
        removeList = [];
        // add each owner's email address to addList or removeList
        Object.keys(owner2boxes).forEach(function(owner) {
          (getElement(owner2boxes[owner][0]).checked ?
              addList : removeList).push(owner2email[owner]);
        });
        getReviewers(changeId, applyGetReviewers);
      }
      function clickBox(event) {
        var name = event.target.value;
        var checked = event.target.checked;
        var others = owner2boxes[name];
        others.forEach(function(id) { getElement(id).checked = checked; });
        getElement(APPLY_BUTTON_ID).style.display = 'inline';
      }
      function addGroupsToDiv(div, keys, title) {
        if (keys.length <= 0) {
          div.style.display = 'none';
          return;
        }
        div.innerHTML = '';
        div.style.display = 'inline';
        div.appendChild(strElement(title));
        function addOwner(ownerEmail) {
          if (ownerEmail == '*') {
            return; // no need to list/select '*'
          }
          numCheckBoxes++;
          var name = ownerEmail.replace(/@[^ ]*/g, '');
          owner2email[name] = ownerEmail;
          var id = CHECKBOX_ID + ':' + numCheckBoxes;
          if (!(name in owner2boxes)) {
            owner2boxes[name] = [];
          }
          owner2boxes[name].push(id);
          var box = document.createElement('input');
          box.type = 'checkbox';
          box.checked = (ownerEmail in reviewerId);
          box.id = id;
          box.value = name;
          box.onclick = clickBox;
          div.appendChild(strElement('&nbsp;&nbsp; '));
          var nobr = document.createElement('nobr');
          nobr.appendChild(box);
          nobr.appendChild(strElement(name));
          div.appendChild(nobr);
        }
        keys.forEach(function(key) {
          var owners = groups[key].owners; // string of owner emails
          var numFiles = groups[key].size;
          var item = HTML_BULLET + '&nbsp;<b>' + key + '</b>' +
              ((numFiles > 1) ? (' (' + numFiles + ' files)') : '');
          var setOfOwners = new Set(owners.split(' '));
          function add2list(list, email) {
            if (setOfOwners.has(email)) {
              list.push(email);
            }
            return list;
          }
          var reducedList = sortedOwners.reduce(add2list, []);
          if (hasNamedOwner(reducedList)) {
            item += ':';
          }
          div.appendChild(strElement(item));
          reducedList.forEach(addOwner);
          div.appendChild(br());
        });
      }
      function addOwnersDiv(div, title) {
        div.innerHTML = '';
        div.style.display = 'inline';
        div.appendChild(strElement(title));
        function compareOwnerInfo(o1, o2) {
          return o1.email.localeCompare(o2.email);
        }
        result.owners.sort(compareOwnerInfo).forEach(function(ownerInfo) {
          var email = ownerInfo.email;
          if (email != '*') { // do not list special email *
            var vote = reviewerVote[email];
            if ((email in reviewerVote) && vote != 0) {
              email += ' <font color="' +
                  ((vote > 0) ? 'green">(+' : 'red">(') + vote + ')</font>';
            }
            div.appendChild(strElement('&nbsp;&nbsp;' + email + '<br>'));
          }
        });
      }
      function updateDivContent() {
        var listOfGroup = Array(NUM_GROUP_TYPES);
        for (var i = 0; i < NUM_GROUP_TYPES; i++) {
          listOfGroup[i] = [];
        }
        Object.keys(groups).sort().forEach(function(key) {
          listOfGroup[groups[key].type].push(key);
        });
        showDiv(header, isExemptedFromOwnerApproval() ? HTML_IS_EXEMPTED :
            ((onSubmit ? HTML_ONSUBMIT_HEADER : '') + HTML_SELECT_REVIEWERS));
        numCheckBoxes = 0;
        owner2boxes = {};
        for (var i = 0; i < NUM_GROUP_TYPES; i++) {
          addGroupsToDiv(groupTypeDiv[i], listOfGroup[i], HTML_GROUP_TYPE_HEADER[i]);
        }
        addOwnersDiv(ownersDiv, HTML_OWNERS_HEADER);
      }
      function createGroups() {
        var owners2group = {}; // owner list to group name
        var firstNoOwnerFile = null;
        var keysOfFile2Owners = Object.keys(result.file2owners);
        keysOfFile2Owners.sort().forEach(function(name) {
          var splitOwners = result.file2owners[name];
          var owners = splitOwners.join(' ');
          if (owners in owners2group) {
            groups[owners2group[owners]].size += 1;
          } else {
            owners2group[owners] = name;
            var type;
            if (!hasNamedOwner(splitOwners)) {
              firstNoOwnerFile = name;
              type = GROUP_TYPE.HAS_NO_OWNER;
            } else if (hasOwnerApproval(reviewerVote, splitOwners)) {
              type = GROUP_TYPE.OWNER_APPROVED;
            } else if (hasStar(splitOwners)) {
              type = GROUP_TYPE.STAR_APPROVED;
            } else if (!hasOwnerReviewer(reviewerId, splitOwners)) {
              type = GROUP_TYPE.NEED_REVIEWER;
            } else {
              type = GROUP_TYPE.NEED_APPROVAL;
            }
            groups[name] = {'type':type, 'size':1, 'owners':owners};
          }
        });
        var numNoOwnerFiles = result.files.length - keysOfFile2Owners.length;
        if (keysOfFile2Owners.length > 0 && numNoOwnerFiles > 0) {
          if (!!firstNoOwnerFile) {
            // count other files as HAS_NO_OWNER
            groups[firstNoOwnerFile].size += numNoOwnerFiles;
          } else {
            // use one of the no-owner-file as group name
            for (var i = 0; i < result.files.length; i++) {
              var name = result.files[i];
              if (!(name in result.file2owners) &&
                  !(('./' + name) in result.file2owners)) {
                groups[name] = {
                  'type': GROUP_TYPE.HAS_NO_OWNER,
                  'size': numNoOwnerFiles,
                  'owners': '*',
                };
                break;
              }
            }
          }
        }
      }
      createGroups();
      updateDivContent();
    }
    function showFindOwnersResults(result) {
      function prepareElements() {
        var elems = [];
        var text = Object.keys(result.file2owners).length <= 0 ? HTML_NO_OWNER : null;
        useContextPopup = !!context && !!text && !!context.popup;
        if (!!text) {
          if (useContextPopup) {
            elems.push(hr(), strElement(text), hr());
            var onClick = function() { context.hide(); };
            elems.push(context.button('OK', {onclick: onClick}), hr());
          } else {
            elems.push(strElement(text), newButton('OK', hideFindOwnersPage));
          }
        } else {
          showFilesAndOwners(result, elems);
          if (result.addDebugMsg) {
            showDebugMessages(result, elems);
          }
        }
        return elems;
      }
      function popupWindow(reviewerList) {
        setupReviewersMap(reviewerList);
        var elems = prepareElements();
        if (useContextPopup) {
          context.popup(context.div.apply(this, elems));
        } else {
          while (pageDiv.firstChild) {
            pageDiv.removeChild(pageDiv.firstChild);
          }
          elems.forEach(function(e) { pageDiv.appendChild(e); });
          pageDiv.className = LARGE_PAGE_STYLE;
          // Calculate required height, limited to 85% of window height,
          // and required width, limited to 75% of window width.
          var maxHeight = Math.round(window.innerHeight * 0.85);
          var maxWidth = Math.round(window.innerWidth * 0.75);
          pageDiv.style.top = '5%';
          pageDiv.style.height = 'auto';
          pageDiv.style.left = '10%';
          pageDiv.style.width = 'auto';
          var rect = pageDiv.getBoundingClientRect();
          if (rect.width > maxWidth) {
            pageDiv.style.width = maxWidth + 'px';
            rect = pageDiv.getBoundingClientRect();
          }
          pageDiv.style.left = Math.round((window.innerWidth - rect.width) / 2) + 'px';
          if (rect.height > maxHeight) {
            pageDiv.style.height = maxHeight + 'px';
            rect = pageDiv.getBoundingClientRect();
          }
          pageDiv.style.top = Math.round((window.innerHeight - rect.height) / 2) + 'px';
          pageDiv.style.visibility = 'visible';
        }
      }
      getReviewers(changeId, popupWindow);
    }
    function callServer(callBack) {
      // Use the plugin REST API; pass only changeId;
      // let server get current patch set, project and branch info.
      restApiGet('/changes/' + changeId + '/owners', showFindOwnersResults);
    }
    event.stopPropagation();
    callServer(showFindOwnersResults);
  }
  function onFindOwners(context) {
    popupFindOwnersPage(context, context.change, context.revision, false);
  }
  function onSubmit(change, revision) {
    const OWNER_REVIEW_LABEL = 'Owner-Review-Vote';
    if (change.labels.hasOwnProperty(OWNER_REVIEW_LABEL)) {
      // Pop up Find Owners page; do not submit.
      popupFindOwnersPage(null, change, revision, true);
      return false;
    }
    return true; // Okay to submit.
  }
  var actionKey = null;
  function onShowChangePolyGerrit(change, revision) {
    var changeActions = self.changeActions();
    // Hide previous 'Find Owners' button under 'MORE'.
    changeActions.setActionHidden('revision', 'find-owners~find-owners', true);
    if (!!actionKey) {
      changeActions.removeTapListener(actionKey);
      changeActions.remove(actionKey);
    }
    actionKey = changeActions.add('revision', '[FIND OWNERS]');
    changeActions.setIcon(actionKey, 'robot');
    changeActions.setTitle(actionKey, 'Find owners of changed files');
    changeActions.addTapListener(actionKey,
        () => popupFindOwnersPage(null, change, revision, false));
  }
  function onClick(event) {
    if (pageDiv.style.visibility != 'hidden' && !useContextPopup) {
      var x = event.clientX;
      var y = event.clientY;
      var rect = pageDiv.getBoundingClientRect();
      if (x < rect.left || x >= rect.left + rect.width ||
          y < rect.top || y >= rect.top + rect.height) {
        hideFindOwnersPage();
      }
    }
  }
  if (window.Polymer) {
    self.on('showchange', onShowChangePolyGerrit);
  } else {
    console.log('WARNING, no [FIND OWNERS] button');
  }
  // When the "Submit" button is clicked, call onSubmit.
  self.on('submitchange', onSubmit);
  // Clicks outside the pop up window should close the window.
  document.body.addEventListener('click', onClick);
  // Leaving page should close the window.
  window.addEventListener('popstate', hideFindOwnersPage);
});
