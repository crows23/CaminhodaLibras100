window.setInterval(function() {
	equipeJogandoAgora = window.localStorage.getItem("equipeJogandoAgora");
	mostrarCasaAtual(equipeJogandoAgora);
}, 100);

function mostrarCasaAtual(equipeJogandoAgora) {
	var mostradorCasa = document.getElementById("mostradorCasaAtual").querySelector("span");
	var atualEquipe = (equipeJogandoAgora-1);
	var indiceDivAtual;

	for (var i = 0; i < divs.length; i++) {
		var figureMarginLeftSplit = figures[atualEquipe].style.marginLeft.split("px");
		var figureMarginTopSplit = figures[atualEquipe].style.marginTop.split("px");

		var divMarginLeftSplit = window.getComputedStyle(divs[i]).marginLeft.split("px");
		var divMarginTopSplit = window.getComputedStyle(divs[i]).marginTop.split("px");

		if (nEquipes == 2) {
			if (i != 0 && i != (divs.length - 1)) {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 40) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 43)) {

					indiceDivAtual = i;
					break;
				}
			}

			else {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 21)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 74) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 82)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 16) &&
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 33) 
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 90) &&
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 87)) {

					indiceDivAtual = i;
					break;
				}
			}
		}

		else if (nEquipes == 3) {
			if (i != 0 && i != (divs.length - 1)) {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 40) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 20) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 43)) {

					indiceDivAtual = i;
					break;
				}
			}
			else {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 21)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 74) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 21)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 37) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 82)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 16) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 33)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 90) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 33)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 61) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 87)) {

					indiceDivAtual = i;
					break;
				}
			}
		}

		else if (nEquipes == 4) {
			if (i != 0 && i != (divs.length - 1)) {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 40) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 43)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 40) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 43)) {
					
					indiceDivAtual = i;
					break;
				}
			}
			else {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 21)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 74) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 21)
					||
					parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 82)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 74) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 82)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 16) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 33)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 90) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 33)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 16) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 87)
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 90) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 87)) {
					
					indiceDivAtual = i;
					break;
				}
			}
		}
	}

	if (indiceDivAtual != 0 && indiceDivAtual != 26){
		mostradorCasa.innerText = indiceDivAtual;
	}
	else if (indiceDivAtual == 0) {
		mostradorCasa.innerText = "Início";
	}
	else {
		mostradorCasa.innerText = "Chegada";
	}

	return mostradorCasa.innerText;
}