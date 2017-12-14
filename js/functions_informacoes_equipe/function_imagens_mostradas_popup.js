var popup = document.getElementById("popup");

if (window.getComputedStyle(popup).display == "none") {
	var figures = document.getElementById("containerCadastrarEquipe").querySelectorAll("figure");
	var labels = document.getElementById("containerCadastrarEquipe").querySelectorAll("label");
	var figuresPopup = document.getElementById("containerInformacoesEquipe").querySelectorAll("figure");
	var id = window.localStorage.getItem("id") - 1;

	
	for (var i = 0; i < figures.length; i++) {
		if (figures[i].querySelector("img").getAttribute("src") != "") {
			for (var j = 0; j < figuresPopup.length; j++) {
				if (figures[i].querySelector("img").getAttribute("src") == figuresPopup[j].querySelector("img").getAttribute("src")) {
					figuresPopup[j].style.display = "none";
					break;
				}
			}
		}
	}
}