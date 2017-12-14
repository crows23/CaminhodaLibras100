function moverPinoTras(quantidadeCasas, equipeJogandoAgora) {
	var indiceFigureAtual = (equipeJogandoAgora-1);
	var indiceDivAtual;

	for (var i = 0; i < divs.length; i++) {
		var figureMarginLeftSplit = figures[indiceFigureAtual].style.marginLeft.split("px");
		var figureMarginTopSplit = figures[indiceFigureAtual].style.marginTop.split("px");

		var divMarginLeftSplit = window.getComputedStyle(divs[i]).marginLeft.split("px");
		var divMarginTopSplit = window.getComputedStyle(divs[i]).marginTop.split("px");

		if (nEquipes == 2) {
			if (i != 25) {
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
				if (parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 16) &&
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
			if (i != 25) {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 40) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 24) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 43)) {

					indiceDivAtual = i;
					break;
				}
			}
			else {
				if (parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 16) && 
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
			if (i != 25) {
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
				if (parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 16) && 
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

	if (nEquipes == 2) {
		var divMarginLeftSplit;
		var divMarginTopSplit;

		if (indiceDivAtual >= 1) {
			if ((indiceDivAtual-quantidadeCasas) <= 0) {
				if (indiceFigureAtual == 0) {
					divMarginTopSplit = window.getComputedStyle(divs[0]).marginTop.split("px");

					figures[0].style.marginLeft = window.getComputedStyle(divs[0]).marginLeft;
					figures[0].style.marginTop = (parseInt(divMarginTopSplit[0]) + 21) + "px";
				}

				else if (indiceFigureAtual == 1) {
					divMarginLeftSplit = window.getComputedStyle(divs[0]).marginLeft.split("px");
					divMarginTopSplit = window.getComputedStyle(divs[0]).marginTop.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 74) + "px";
					figures[1].style.marginTop = (parseInt(divMarginTopSplit[0]) + 82) + "px";
				}

				figures[indiceFigureAtual].style.width = "5.5%";
				figures[indiceFigureAtual].style.height = "9%";
			}
			else {
				if (indiceFigureAtual == 0) {
					figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-quantidadeCasas)]).marginLeft;
					figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-quantidadeCasas)]).marginTop;
				}

				else if (indiceFigureAtual == 1) {
					divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-quantidadeCasas]).marginLeft.split("px");
					divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-quantidadeCasas]).marginTop.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 40) + "px";
					figures[1].style.marginTop = (parseInt(divMarginTopSplit[0]) + 43) + "px";
				}

				figures[indiceFigureAtual].style.width = "3%";
				figures[indiceFigureAtual].style.height = "6.5%";
			}

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
	}

	else if (nEquipes == 3) {
		var divMarginLeftSplit;
		var divMarginTopSplit;

		if (indiceDivAtual >= 1) {
			if ((indiceDivAtual-quantidadeCasas) <= 0) {
				if (indiceFigureAtual == 0) {
					divMarginTopSplit = window.getComputedStyle(divs[0]).marginTop.split("px");

					figures[0].style.marginLeft = window.getComputedStyle(divs[0]).marginLeft;
					figures[0].style.marginTop = (parseInt(divMarginTopSplit[0]) + 21) + "px";
				}

				else if (indiceFigureAtual == 1) {
					divMarginTopSplit = window.getComputedStyle(divs[0]).marginTop.split("px");
					divMarginLeftSplit = window.getComputedStyle(divs[0]).marginLeft.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 74) + "px";
					figures[1].style.marginTop = (parseInt(divMarginTopSplit[0]) + 21) + "px";
				}

				else if (indiceFigureAtual == 2) {
					divMarginLeftSplit = window.getComputedStyle(divs[0]).marginLeft.split("px");
					divMarginTopSplit = window.getComputedStyle(divs[0]).marginTop.split("px");

					figures[2].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 37) + "px";
					figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 82) + "px";
				}

				figures[indiceFigureAtual].style.width = "5.5%";
				figures[indiceFigureAtual].style.height = "9%";
			}
			else {
				if (indiceFigureAtual == 0) {
					figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-quantidadeCasas)]).marginLeft;
					figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-quantidadeCasas)]).marginTop;
				}

				else if (indiceFigureAtual == 1) {
					divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-quantidadeCasas]).marginLeft.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 40) + "px";
					figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-quantidadeCasas)]).marginTop;
				}

				else if (indiceFigureAtual == 2) {
					divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-quantidadeCasas]).marginLeft.split("px");
					divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-quantidadeCasas]).marginTop.split("px");

					figures[2].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 20) + "px";
					figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 43) + "px";
				}

				figures[indiceFigureAtual].style.width = "3%";
				figures[indiceFigureAtual].style.height = "6.5%";
			}

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
	}

	else if (nEquipes == 4) {
		var divMarginLeftSplit;
		var divMarginTopSplit;

		if (indiceDivAtual >= 1) {
			if ((indiceDivAtual-quantidadeCasas) <= 0) {
				if (indiceFigureAtual == 0) {
					divMarginTopSplit = window.getComputedStyle(divs[0]).marginTop.split("px");

					figures[0].style.marginLeft = window.getComputedStyle(divs[0]).marginLeft;
					figures[0].style.marginTop = (parseInt(divMarginTopSplit[0]) + 21) + "px";
				}

				else if (indiceFigureAtual == 1) {
					divMarginTopSplit = window.getComputedStyle(divs[0]).marginTop.split("px");
					divMarginLeftSplit = window.getComputedStyle(divs[0]).marginLeft.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 74) + "px";
					figures[1].style.marginTop = (parseInt(divMarginTopSplit[0]) + 21) + "px";
				}

				else if (indiceFigureAtual == 2) {
					divMarginTopSplit = window.getComputedStyle(divs[0]).marginTop.split("px");
					
					figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 82) + "px";
					figures[2].style.marginLeft = window.getComputedStyle(divs[0]).marginLeft;
				}

				else if (indiceFigureAtual == 3) {
					divMarginLeftSplit = window.getComputedStyle(divs[0]).marginLeft.split("px");
					divMarginTopSplit = window.getComputedStyle(divs[0]).marginTop.split("px");

					figures[3].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 74) + "px";
					figures[3].style.marginTop = (parseInt(divMarginTopSplit[0]) + 82) + "px";
				}

				figures[indiceFigureAtual].style.width = "5.5%";
				figures[indiceFigureAtual].style.height = "9%";
			}
			else {
				if (indiceFigureAtual == 0) {
					figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-quantidadeCasas)]).marginLeft;
					figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-quantidadeCasas)]).marginTop;
				}

				else if (indiceFigureAtual == 1) {
					divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-quantidadeCasas]).marginLeft.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 40) + "px";
					figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-quantidadeCasas)]).marginTop;
				}

				else if (indiceFigureAtual == 2) {
					divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-quantidadeCasas]).marginTop.split("px");

					figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 43) + "px";
					figures[2].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-quantidadeCasas)]).marginLeft;
				}

				else if (indiceFigureAtual == 3) {
					divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-quantidadeCasas]).marginLeft.split("px");
					divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-quantidadeCasas]).marginTop.split("px");

					figures[3].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 40) + "px";
					figures[3].style.marginTop = (parseInt(divMarginTopSplit[0]) + 43) + "px";
				}

				figures[indiceFigureAtual].style.width = "3%";
				figures[indiceFigureAtual].style.height = "6.5%";
			}

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
	}
}