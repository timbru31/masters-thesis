jQuery(document).ready(function() {
  var params = window.location.search.substr(1).split('&');
  for(var i=0; i<params.length; i++) {
    var key_val = params[i].split('=');
    if(key_val.length == 2 && key_val[0] == 'referral') {
      jQuery.cookie('referral', key_val[1], { expires: 15, path: '/' });

      //Remove query parameter from URL
      var url = window.location.href;
      var pos = url.indexOf(key_val[0]);
      var first = url.slice(0, pos - 1);
      var last = url.slice(pos + params[i].length);
      if(url.charAt(pos - 1) == '?' && last) {
        last = '?' + last.slice(1);
      }
      //Update location in-place without page refresh
      window.history.pushState('referral', '', first + last);
      break;
    }
  }
});
