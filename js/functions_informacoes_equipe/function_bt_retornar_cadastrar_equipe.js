var botaoRetornar = document.getElementById("botaoRetornar").querySelector("input");

botaoRetornar.onclick = function() {
	var figuresPopup = document.getElementById("containerInformacoesEquipe").querySelectorAll("figure");

	for (var i = 0; i < figuresPopup.length; i++) {
		if (figuresPopup[i].querySelector("img").style.border == "2px solid rgb(255, 0, 0)") {
			figuresPopup[i].querySelector("img").style.border = "none";
		}
	}

	document.getElementById("fundoPopup").style.display = "none";
	document.getElementById("popup").style.display = "none";
	document.querySelector("body").style.opacity = "0";
	window.setTimeout(function() {
		location.reload();
	}, 301);	
}