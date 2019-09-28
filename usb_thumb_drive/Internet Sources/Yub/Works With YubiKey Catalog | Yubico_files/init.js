var companies;

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    var that = this; //we need this to make the set we are intersecting is accessible in the forEach scope
    setB.forEach(function(key, val, traversedSet) {
      if (that.has(val))
        intersection.add(val);
    });
    return intersection;
}

// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

//https://stackoverflow.com/a/27078401
//This is a modified version of the throttle function from underscore.js.
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

/**
 * Main function for the applet.
 */
function start() {
    jQuery(document).ready(function() {

        d3.json("https://www.yubico.com/wp-json/wp/v2/pages?parent=362101&per_page=100&orderby=title&order=asc&page=1", function (err, json) {
            if (err) {
                // return console.log(err);
            }
            // quick fix to grab 200 pages
            if (json.length == 100) {
                d3.json("https://www.yubico.com/wp-json/wp/v2/pages?parent=362101&per_page=100&orderby=title&order=asc&page=2", function (err2, json2) {
                    if (err2) {
                        // return console.log(err);
                    }
                    for(var key in json2) {
                        json.push(json2[key]) ;
                    }
                    // another ugly quick fix to grab 300 pages
                    if (json2.length == 100) {
                        d3.json("https://www.yubico.com/wp-json/wp/v2/pages?parent=362101&per_page=100&orderby=title&order=asc&page=3", function (err3, json3) {
                            if (err3) {
                                // return console.log(err);
                            }
                            for(var key in json3) {
                                json.push(json3[key]) ;
                            }
                            loopnclean(json) ;
                        });
                    } else {
                     loopnclean(json) ;
                    }
                });
            } else {
                loopnclean(json) ;
            }
        }) ;

        function loopnclean(json) {
            // loop through content.rendered and add a few more objects to the json file
            for (var i = 0; i < json.length; i++) {

                try {
                    if (json[i].content.protected === true) {
                        delete json[i] ;
                        continue ;
                    }
                } catch(err) {
                    // console.log(err) ;
                }

                var logo ;
                // look for a log on the partner page
                try {
                    if ($(json[i].content.rendered).find(".avia_image").length > 1) {
                        if (($(json[i].content.rendered).find(".avia_image")[0].src).indexOf('172x49') > 0) {
                            logo = $(json[i].content.rendered).find(".avia_image")[0].src ;
                        } else if (($(json[i].content.rendered).find(".avia_image")[1].src).indexOf('172x49') > 0) {
                            logo = $(json[i].content.rendered).find(".avia_image")[1].src ;
                        } else {
                            logo = $(json[i].content.rendered).find(".avia_image")[1].src ;
                            // logo = "https://www.yubico.com/wp-content/uploads/2015/05/Yubico-logo-website.png"
                        }
                    } else {
                        if (($(json[i].content.rendered).find(".avia_image")[0].src).indexOf('172x49') > 0) {
                            logo = $(json[i].content.rendered).find(".avia_image")[0].src ;
                        } else {
                            logo = $(json[i].content.rendered).find(".avia_image")[0].src ;
                            // logo = "https://www.yubico.com/wp-content/uploads/2015/05/Yubico-logo-website.png"
                        }
                    }
                } catch(err) {
                    logo = "" ;
                    //console.log(err) ;
                }

                var companyName = json[i].title.rendered.replace("&#038;", "&") || 'Company Name' ;

                var description = '' ;

                try {
                    if ($($(json[i].content.rendered).find(".avia_textblock")[1]).text().trim().length > 10) {
                        description = $($(json[i].content.rendered).find(".avia_textblock")[1]).text().trim()
                    } else if ($($(json[i].content.rendered).find(".avia_textblock")[2]).text().trim().length > 10) {
                        description = $($(json[i].content.rendered).find(".avia_textblock")[2]).text().trim()
                    } else {
                        description = 'Click to learn more.' ;
                    }
                } catch(err) {
                    description = 'Click to learn more.' ;
                }


                // get supported legacy keys
                var keysArray = $(json[i].content.rendered).find('h3:contains("YubiKeys")').parent().find('p').text().split('\n') || [];

                // get support new keys
                var newKeysArray = $(json[i].content.rendered).find('#buy-yks').parent().find('p').toArray() || [] ;
                newKeysArray = newKeysArray.filter(String) ;

                try {
                    newKeysArray.forEach(function(key) {
                        if (key.textContent.indexOf('YubiKey') > -1) {
                            if (key.textContent.indexOf('Unsupported') > -1) {
                                // don't add unsupported keys
                            } else if (key.textContent.indexOf('4') > -1) {
                                var newk = key.textContent ; // add a space to beginning to sort at top of dropdown
                                keysArray.push(newk) ;
                            } else {
                                var newk = " " + key.textContent ; // add a space to beginning to sort at top of dropdown
                                keysArray.push(newk) ;
                            }
                        } else if (key.textContent.indexOf('Security') > -1) {
                            if (key.textContent.indexOf('Unsupported') > -1) {
                                // don't add unsupported keys
                            } else if (key.textContent.indexOf('4') > -1) {
                                var newks = key.textContent; // add a space to beginning to sort at top of dropdown
                                keysArray.push(newks);
                            } else {
                                var newks = " " + key.textContent; // add a space to beginning to sort at top of dropdown
                                keysArray.push(newks);
                            }
                        } else if (key.textContent.indexOf('YubiHSM') > -1) {
                            keysArray.push(key.textContent) ;
                        } else {
                            // console.log(key.textContent) ;
                        }
                    });
                }
                catch(err) {
                    // console.log(err) ;
                }

                var protocolsArray = $(json[i].content.rendered).find('h3:contains("Security protocol support")').parent().find('p').text().split('\n') || [] ;
                var usecasesArray = $(json[i].content.rendered).find('h3:contains("Categories")').parent().find('p').text().split('\n') || [] ;
                var keywordsArray = [] ;

                keywordsArray.push(companyName) ; // Company name is only keyword to search for now

                json[i].logo = logo ;
                json[i].companyName = companyName || "No Company Name" ;
                json[i].description = description || "No description" ;
                json[i].usecases = usecasesArray ;
                json[i].protocols = protocolsArray ;
                json[i].keys = keysArray ; // Need to add current YubiKeys, these are from the legacy keys list
                json[i].keywords = keywordsArray ;

            }

            companies = json;
            createNavSelect(json);
            checkHash(json);
            updateApp(json);
        }
    });
}

/**
 * This function programmatically generates the select element's options.
 * We do this to ensure that we only display the companies who have use cases.
 * @param  {Object[]} json The filtered JSON file with companies to display
 */
function createNavSelect(json) {
    //Set data structure used to ensure no duplicates
    var usecaseSet = [] ;// new Set() ; // which use cases do they support
    var keySet = [] ;//new Set(); // which keys do they support
    var protocolSet = [] ;//new Set(); // might remove this, currently not showing on filter options

    for (var i = 0; i < json.length; i++) {
        // add keys to keySet
        json[i].keys.forEach(function(key) {
            if (key != '') {
                if (keySet.indexOf(key) === -1) {
                    keySet.push(key) ;
                } else {
                    //console.log('already in set') ;
                }
            }
        });

        // add protocols to protocolSet
        json[i].protocols.forEach(function(protocol) {
            if (protocol != '') {
                if (protocolSet.indexOf(protocol) === -1) {
                    protocolSet.push(protocol) ;
                } else {
                    //console.log('already in set') ;
                }
            }
        });

        // add usecases to usecases
        json[i].usecases.forEach(function(usecase) {
            if (usecase != '') {
                if (usecaseSet.indexOf(usecase) === -1) {
                    usecaseSet.push(usecase) ;
                } else {
                    //console.log('already in set') ;
                }
            }
        });
    }

    generateNavOptions(keySet, '#key-select');
    generateNavOptions(protocolSet, '#protocol-select'); // not currently using this
    generateNavOptions(usecaseSet, '#usecase-select');
}

function generateNavOptions(setData, elmId) {
    var uniques = Array.from(setData).sort();
    for (var i = 0; i < uniques.length; i++) {
        var val = uniques[i].toLowerCase().split(' ').join('-');
        jQuery(elmId).append('<option value=' + val + '>' + uniques[i] + '</option>');
    }
}

/**
 * This function only runs once on page load. It checks if a hash exists in the URL; if it does,
 * then we populate the page with pre-filtered data.
 * @param  {Object[]} json  The JSON data tha was loaded by D3
 */
function checkHash(json) {
    var hash = window.location.hash;
    if (hash == '') {
        jQuery('#usecase-select').val('all').change();
        jQuery('#key-select').val('all').change();
        jQuery('#protocol-select').val('all').change();
    } else if (hash.length > 20) {
        try {
            var hashVals = hash.split('#')[1].split('&');
            var protocol = hashVals[0].split('=')[1];
            var usecase = hashVals[1].split('=')[1];
            var key = hashVals[2].split('=')[1];
            protocol = decodeURIComponent(protocol);
            jQuery('#usecase-select').val(usecase).change();
            jQuery('#key-select').val(key).change();
            jQuery('#protocol-select').val(protocol).change();
        } catch(err) {
            jQuery('#usecase-select').val('all').change();
            jQuery('#key-select').val('all').change();
            jQuery('#protocol-select').val('all').change();
        }
    } else {
        window.location.hash = 'protocol=all&usecase=all&key=all';
        jQuery('#usecase-select').val('all').change();
        jQuery('#key-select').val('all').change();
        jQuery('#protocol-select').val('all').change();
    }
    var companies = arrangeCompanies(json);
    var numCols = determineCols(window.innerWidth);
    var filtered = filterCompanies(numCols, companies);
    renderD3(filtered);
}

/**
 * updateApp is composed primarily of event handlers that fire on specific page actions.
 * In this way, whenever a user interacts with the page, we can respond to it accordingly.
 * @param  {Object[]} json JSON data that was loaded by D3
 */
function updateApp(json) {
    var width, numCols, time;
    var throttled = throttle(function() {
        width = window.innerWidth;
        var companies = arrangeCompanies(json);
        numCols = determineCols(width);
        var filtered = filterCompanies(numCols, companies);
        renderD3(filtered);
    }, 100);
    jQuery(window).resize(throttled);

    jQuery('#protocol-select, #usecase-select, #key-select').change(function() {
        setHash();
        width = window.innerWidth;
        var companies = arrangeCompanies(json);
        numCols = determineCols(width);
        var filtered = filterCompanies(numCols, companies);
        renderD3(filtered);
    });

    jQuery(document).on('click', '.company-content', function() {
        var name = jQuery(this).attr('id');
        var companies = arrangeCompanies(json);
        var company = searchForCompany(name, companies);
        window.open(company.link, '_blank');
    });

    jQuery('#keyword-search').on('input', function() {
        var keyword = jQuery(this).val();
        var matched = searchByKeyword(keyword);
        width = window.innerWidth;
        var companies = arrangeCompanies(matched);
        numCols = determineCols(width);
        var filtered = filterCompanies(numCols, companies);
        renderD3(filtered);
    });
}
/**
 * renderD3 uses the d3 library to parse the passed-in JSON file and create the HTML that's
 * ultimately shown to the user.
 * @param  {Object[]} companies A filtered JSON file of companies to display
 */
function renderD3(companies) {
    jQuery('#app').empty();
    if (companies.length == 0) {
        jQuery('#app').append('<div> \
            <h1>No results found.</h1> \
            <p>Please refine your search and try again.</p> \
        </div>');
        return;
    }
    var app = d3.select("#app");
    var contentRows = app.selectAll("div")
        .data(companies)
        .enter()
        .append('div')
            .attr('class', 'company-row');

    var contentDivs = contentRows.selectAll("div")
        .data(function(d) { return d; })
        .enter()
        .append('div')
            .attr('class', 'company-content')
            .attr('id', function(d) { return d.companyName; });

    var svg = contentDivs.append("svg")
        .attr("width", 300)
        .attr("height", 100);

    svg.append("svg:image")
        .attr("height", 80)
        .attr("width", 160)
        .attr("transform","translate(20, 20)")
        .attr("xlink:href", function(d) {
            return d.logo ;
            // return d.imgUrl; // original code
        });

    var divContent = contentDivs.append("div")
        .attr("class", "co-desc");

    divContent.append("div")
        .attr("class", "coname")
        .text(function(d) { return d.companyName; });

    divContent.append("div")
        .attr("class", "codesc")
        .text(function(d) {
            if (d.description.length > 220) {
                var shortd = d.description.substring(0, 220) + "..."
                return shortd ;
            } else {
                return d.description ;
            }
        });

    contentDivs.append("div")
        .attr("class", "learnmore")
        .html(
            "Learn more <img src='https://www.yubico.com/wp-content/uploads/2018/03/blue-arrow-right.png' width='20' height='20' />"
            );

}

/**
 * This function is used to dynamically set the URL hash based on the select value.
 * We want this behavior because it'll allow users to directly link to a filtered view.
 */
function setHash() {
    var key = jQuery('#key-select option:selected').val();
    var protocol = jQuery('#protocol-select option:selected').val();
    var usecase = jQuery('#usecase-select option:selected').val();
    window.location.hash = 'protocol=' + protocol + '&usecase=' + usecase + '&key=' + key;
    //I have no idea why this is needed...but wihtout this line the applet breaks.
    jQuery('#app').text('');
}

/**
 * Filter function for JSON files.
 * Sorts in asc order based on company name.
 * @param  {Object[]} json Raw JSON file
 */
function arrangeCompanies(json) {
    var companies = json.sort(function(a, b) {
        if (a.companyName.toLowerCase() > b.companyName.toLowerCase()) {
            return 1 ;
        } else if (a.companyName.toLowerCase() < b.companyName.toLowerCase()) {
            return -1 ;
        } else {
            return 0 ;
        }
    });
    return companies;
}
/**
 * Filter companies generates a new JSON array that contains companies that are in the selected vertical and/or use case.
 * @param  {Number} numCols Determines how many elements are in each row.
 * @return {Object[]}       An object array that only contains elements matching the vertical.
 */
function filterCompanies(numCols, companies) {
    var filteredUsecases = [] ;//new Set();
    var filteredKeys = [] ;//new Set();
    var filteredProtocols = [];//new Set();

    var keyFilter = jQuery('#key-select option:selected').text();
    var usecaseFilter = jQuery('#usecase-select option:selected').text()
    var protocolFilter = jQuery('#protocol-select option:selected').text();

    for (var i = 0; i < companies.length; i++) {
        var keyName = (keyFilter == 'All') ? companies[i].keys : keyFilter;
        var usecaseName = (usecaseFilter == 'All') ? companies[i].usecases : usecaseFilter;
        var protocolName = (protocolFilter == 'All') ? companies[i].protocols : protocolFilter;

        if (findKey(companies[i], keyName)) {
            filteredKeys.push(companies[i]);
        }

        if (findUsecase(companies[i], usecaseName)) {
            filteredUsecases.push(companies[i]);
        }

        if (findProtocol(companies[i], protocolName)) {
          filteredProtocols.push(companies[i]);
        }
    }
    //var common = filteredUsecases.intersection(filteredKeys);
    function checkkeys(key) {
        return filteredKeys.indexOf(key) > -1 ;
    }

    function checkprotocols(protocol) {
      return filteredProtocols.indexOf(protocol) > -1 ;
    }

    var common = filteredUsecases.filter(checkkeys);
    /*
     This adds in the logic needed to compare between the security protocols and (Usecases & YubiKeys)
    */
    var common_with_protocol = common.filter(checkprotocols);

    var filteredCompanies = chunkArray(Array.from(common_with_protocol), numCols);
    return filteredCompanies;
}

/**
 * Returns an array of objects where each entry has information that matches the search query.
 * @param  {String} searchQuery User input search query
 * @return {Object[]}           Array containing the companies that match the search query
 */
function searchByKeyword(searchQuery) {
    if (searchQuery == '' || searchQuery.length < 3) {
        return companies;
    }
    var query = searchQuery.toLowerCase();
    var found = [] // new Set();
    for (var i = 0; i < companies.length; i++) {
        var keywords = companies[i].keywords.map(function(word) {
          return word.toLowerCase();
        });
        var protocols = companies[i].protocols.map(function(protocol) {
          return protocol.toLowerCase();
        });

        /*
        if (searchWithin(keywords, query) || searchWithin(protocols, query)) {
            found.push(companies[i]);
        }
        */

        if (companies[i].companyName.toLowerCase().indexOf(query) !== -1) {
            found.push(companies[i]);
        }

        // var newSummary = companies[i].description ;
        // if (newSummary.toLowerCase().indexOf(query) !== -1) {
        //     found.push(companies[i]);
        // }
    }
    return found ;
    // return Array.from(found);
}

function searchWithin(keywords, query) {
    //map creates a boolean array representing whether or not we found the query within each array entry
    //Reduce operates on this newly created boolean array and uses bitwise to boil our results down to 0/1.
    //Therefore, we only display a result if the query exists in any of the content
    var keywordPresent = keywords.map(function(word) {
      return word.indexOf(query) > -1 ? 1 : 0;
    });

    return keywordPresent.reduce(function(accumulator, curVal) {
      return accumulator | curVal;
    });
}

/**
 * Dynamically appends the company info when we click on the containing div.
 * @param  {Object} company The company object
 * @param  {Number} numCols The current number of columns displayed for this view width
 * @return {jQuery Object}  A jQuery object containing the item-info that's to be added
 */
function insertItemInfo(company, numCols) {
    var companyBoxWidth = jQuery('.company-content').width() + 10;
    //Set a lower bound of the width of the info box. When numCols = 1, the info div is super narrow => bad for reading on mobile.
    var infoBoxWidth =  (numCols == 1) ? Math.ceil(window.innerWidth * .85) : companyBoxWidth * numCols;
    var divToInsert = jQuery("<div/>", { "class" : "item-info", 'style' : "width:" + infoBoxWidth + "px"});
    if (company == '') {
        return false; //returns omething else more user friendly
    }
    divToInsert.append("<div id='close'>X</div>");
    divToInsert.append('<h1>' + company.companyName + '</h1>');

    var divContent = jQuery("<div />", { "class" : "item-content" });

    divContent.append('<p>' + company.description + '</p>');
    //divContent.append('<p><em>Industry:</em> ' + company.vertical + '</p>');
    // divContent.append('<p><em>Supported Keys:</em> ' + company.keys.toString() + '</p>');
    if (company.protocols != "") {
        //divContent.append('<p><em>Protocols:</em> ' + company.protocols.join(', ').trim() + '</p>');
    }

    var partnerPage = jQuery('<div class="link-container"></div>');

    if (company.link.startsWith('Contact Sales')) {
        //pass
    } else if (company.link.indexOf('reference-customers') !== -1) {
        partnerPage.append('<a href="' + company.link + '" class="case-study-link">Read the Case Study</a>');
    } else {
        partnerPage.append('<a href="' + company.link + '" class="partner-page-link">Learn More</a>');
    }

    divContent.append(partnerPage);

    divToInsert.append(divContent);

    return divToInsert;
}

/**
 * Searches for the specific company object based on the name
 * @precondition The company is present in the JSON file
 * @param  {String} name The name of the company
 * @return {Object}      The Object of the company.
 */
function searchForCompany(name, companies) {
    company = '';
    for (var i = 0; i < companies.length; i++) {
        if (companies[i].companyName == name) {
            company = companies[i];
        }
    }
    return company;
}

/**
 * Searches the company object for the existence of the protocol value
 * @param  {Object} company Object containing the company data.
 * @param  {String | Array} protocol A string/array of the use case(s) we are looking for.
 * @return {Boolean}        whether or not we found the use case within this company
 */
function findProtocol(company, protocol) {
    //If protocol is an array, then it typically means it's the exact same array.
    if (protocol == company.protocols) return true;
    return company.protocols.indexOf(protocol) != -1;
}

function findUsecase(company, usecase) {
    //If usecase is an array, then it typically means it's the exact same array.
    if (usecase == company.usecases) return true;
    return company.usecases.indexOf(usecase) != -1;
}

function findKey(company, key) {
    //If key is an array, then it typically means it's the exact same array.
    if (key == company.keys) return true;
    return company.keys.indexOf(key) != -1;
}

/**
 * Chunks the array into groups determined by size.
 * @param  {Array} array arbitrary array
 * @param  {Number} size  a number, typically an integer, that tells us how big our chunks are
 * @return {Array}       a new array where each entry is a chunk
 */
function chunkArray(array, size) {
    var newArray = [];
    for (var i = 0; i < array.length; i += size) {
        newArray.push(array.slice(i, i+size));
    }
    return newArray;
}

function determineCols(width) {
    //based on the width of the window, we set a number of rows. a dirty hack for responsiveness
    //these hardcoded numbers were manually determined by playing with the window sizes in Google Chrome
    //NOTE: Please double check in other browsers to ensure functionality
    var numCols;
    if (width >= 1068) {
        numCols = 3; // 5;
    } else if (width <= 1068 && width >=  855) {
        numCols = 2; // 4;
    } else if (width <= 854 && width >= 757) {
        numCols = 2; //3;
    } else if (width <= 756 && width >= 495) {
        numCols = 1; //2;
    } else {
        numCols = 1;
    }
    return numCols;
}

start();
