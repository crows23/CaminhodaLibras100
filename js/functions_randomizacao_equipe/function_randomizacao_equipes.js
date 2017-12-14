var nEquipes = window.localStorage.getItem("nEquipes");
var figures = document.getElementById("containerOrdemEquipes").querySelectorAll("figure");

var ordem = [];
var nomeEquipes = [];
var imgEquipes = [];

if (window.localStorage.getItem("equipesFormadas") == "true") {
	while (ordem.length < parseInt(nEquipes)) {
		var indice = getRandomInt(0, parseInt(nEquipes));
		if (ordem.length != 0) {
			var igual = false;
			for (var i = 0; i < ordem.length; i++) {
				if (ordem[i] == indice) {
					igual = true;
					break;
				}
			}
			if (igual == false) {
				ordem.push(indice);
			}
		}
		else {
			ordem.push(indice);
		}
	}

	for (var i = 0; i < parseInt(nEquipes); i++) {
		var nomeEquipe = window.localStorage.getItem("nomeEquipe"+(ordem[i]));
		var imgEquipe = window.localStorage.getItem("caminhoImagemEquipe"+(ordem[i]));

		nomeEquipes.push(nomeEquipe);
		imgEquipes.push(imgEquipe);
	}

	window.localStorage.setItem("equipesFormadas", false);
}

for (var i = 0; i < parseInt(nEquipes); i++) {
	if (window.localStorage.getItem("caminhoImagemOrdenado" + (i+1)) == null || window.localStorage.getItem("caminhoImagemOrdenado" + (i+1)) == "null") {
		window.localStorage.setItem("caminhoImagemOrdenado" + (i+1), imgEquipes[i]);
		window.localStorage.setItem("nomeEquipeOrdenado" + (i+1), nomeEquipes[i]);

		figures[i].querySelector("img").src = imgEquipes[i];
		figures[i].querySelector("img").alt = nomeEquipes[i];
		figures[i].querySelector("img").style.width = "100%";
		figures[i].querySelector("img").style.height = "100%";
	}
	else {
		figures[i].querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado" + (i+1));
		figures[i].querySelector("img").alt = window.localStorage.getItem("nomeEquipeOrdenado" + (i+1));
		figures[i].querySelector("img").style.width = "100%";
		figures[i].querySelector("img").style.height = "100%";
	}
}

window.localStorage.setItem("equipeJogandoAgora", 1);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}