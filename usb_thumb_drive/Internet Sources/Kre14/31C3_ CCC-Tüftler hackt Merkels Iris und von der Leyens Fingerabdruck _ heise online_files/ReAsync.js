function loadScript(EM_reListId) {
  var script = document.createElement('img');
  script.type = 'text/html';
  script.width = 1;
  script.height = 1;
  script.style.cssText = 'visibility:hidden;display:none;';
  script.src = 'https://brain.rvty.net/RTB/Re?EM_reListId='+EM_reListId+'&EM_del=0&EM_shopArtId=0';
  document.body.appendChild(script);
}

function loadPxl() {
	  var script = document.createElement('iframe');
	  script.type = 'text/html';
	  script.width = 1;
	  script.height = 1;
	  script.src = 'https://brain.rvty.net/RTB/Pxl';
	  script.style.cssText = 'visibility:hidden;display:none;';
	  document.body.appendChild(script);
	}

window.onload = loadScript(EM_reListId);
window.onload = loadPxl();