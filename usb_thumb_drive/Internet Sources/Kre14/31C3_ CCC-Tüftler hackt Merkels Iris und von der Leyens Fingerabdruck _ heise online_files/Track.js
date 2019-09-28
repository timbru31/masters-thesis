function loadScript(RTBLAB_KEY) {
  var script = document.createElement('img');
  script.type = 'text/html';
  var url = escape(document.URL);
  url = url.replace(/\//g,"_");
  script.src = 'https://www.rvty.net/goto/px/key/'+RTBLAB_KEY+'/sub_id/'+url;
  document.body.appendChild(script);
}

window.onload = loadScript(RTBLAB_KEY);