const remote = require('electron').remote;

document.getElementById("espacoBotoesMenu").querySelectorAll("input")[3].addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    
    document.querySelector("body").style.opacity = "0";

    window.setTimeout(function() {
		window.close();
	}, 501);
    
}); 