function mudarEquipeJogandoAgora() {
	if (nEquipes == 2) {
		marginTopAuxEquipe1 = "-20";
		marginLeftAuxEquipe1 = "0";
		widthAuxEquipe1 = "132.194";
		heightAuxEquipe1 = "114";

		marginTopAuxEquipe2 = "73";
		marginLeftAuxEquipe2 = "156.2";
		widthAuxEquipe2 = "64.097";
		heightAuxEquipe2 = "49";

		fila[0].style.marginTop = marginTopAuxEquipe2 + "px";
		fila[0].style.marginLeft =  marginLeftAuxEquipe2 + "px";
		fila[0].style.width = widthAuxEquipe2 + "px";
		fila[0].style.height = heightAuxEquipe2 + "px";
		fila[0].style.border = "2px solid #f3efe2";
		fila[0].style.backgroundColor = "#f3efe2";
		fila[0].querySelector("p").style.opacity = "0";

		fila[1].style.marginTop = marginTopAuxEquipe1 + "px";
		fila[1].style.marginLeft = marginLeftAuxEquipe1 + "px";
		fila[1].style.width = widthAuxEquipe1 + "px";
		fila[1].style.height = heightAuxEquipe1 + "px";
		fila[1].style.border = "10px solid #f3efe2";
		fila[1].style.borderTop = "30px solid #f3efe2";
		fila[1].style.borderBottom = "none";
		fila[1].style.backgroundColor = "#E9A93F";

		fila[0].style.transition = "all 0.7s linear";
		fila[0].style.transform = "rotateY(-360deg)";

		fila[1].style.transition = "all 0.7s linear";
		fila[1].style.transform = "rotateY(-360deg)";

		window.setTimeout(function() {
			fila[0].style.marginTop = "73px";
			fila[0].style.marginLeft = "156.2px";

			fila[0].style.transition = "transform 0s";
			fila[0].style.transform = "rotate(0deg)";
			fila[0].style.borderBottom = "none";

			fila[1].style.transition = "transform 0s";
			fila[1].style.transform = "rotate(0deg)";
			fila[1].style.borderBottom = "none";
			fila[1].querySelector("p").style.opacity = "1";
			fila[1].querySelector("p").style.marginTop = "-25px";

			var indiceFilaAux = fila[0];
			fila[0] = fila[1];
			fila[1] = indiceFilaAux;

			equipeJogandoAgora = window.localStorage.getItem("equipeJogandoAgora");

			if (equipeJogandoAgora >= 2) {
				window.localStorage.setItem("equipeJogandoAgora", 1);
			}
			else {
				window.localStorage.setItem("equipeJogandoAgora", parseInt(equipeJogandoAgora) + 1);
			}
		}, 750);
	}

	else if (nEquipes == 3) {
		marginLeftAuxEquipe1 = "0";
		marginTopAuxEquipe1 = "-20";
		widthAuxEquipe1 = "132.194";
		heightAuxEquipe1 = "114";

		marginLeftAuxEquipe2 = "156.2";
		marginTopAuxEquipe2 = "73";
		widthAuxEquipe2 = "64.097";
		heightAuxEquipe2 = "49";

		marginLeftAuxEquipe3 = "228.2";
		marginTopAuxEquipe3 = "73";
		widthAuxEquipe3 = "64.097";
		heightAuxEquipe3 = "49";

		fila[0].style.marginLeft =  marginLeftAuxEquipe3 + "px";
		fila[0].style.marginTop = marginTopAuxEquipe3 + "px";
		fila[0].style.width = widthAuxEquipe3 + "px";
		fila[0].style.height = heightAuxEquipe3 + "px";
		fila[0].style.border = "2px solid #f3efe2";
		fila[0].style.backgroundColor = "#f3efe2";
		fila[0].querySelector("p").style.opacity = "0";

		fila[1].style.marginLeft = marginLeftAuxEquipe1 + "px";
		fila[1].style.marginTop = marginTopAuxEquipe1 + "px";
		fila[1].style.width = widthAuxEquipe1 + "px";
		fila[1].style.height = heightAuxEquipe1 + "px";
		fila[1].style.border = "10px solid #f3efe2";
		fila[1].style.borderTop = "30px solid #f3efe2";
		fila[1].style.backgroundColor = "#E9A93F";

		fila[2].style.marginLeft =  marginLeftAuxEquipe2 + "px";
		fila[2].style.marginTop = marginTopAuxEquipe2 + "px";
		fila[2].style.width = widthAuxEquipe2 + "px";
		fila[2].style.height = heightAuxEquipe2 + "px";

		fila[0].style.transition = "all 0.7s linear";
		fila[0].style.transform = "rotateY(-360deg)";

		fila[1].style.transition = "all 0.7s linear";
		fila[1].style.transform = "rotateY(-360deg)";

		fila[2].style.transition = "all 0.7s linear";
		fila[2].style.transform = "rotateY(-360deg)";

		window.setTimeout(function() {
			fila[0].style.marginTop = "73px";
			fila[0].style.marginLeft = "228.2px";

			fila[0].style.transition = "transform 0s";
			fila[0].style.transform = "rotate(0deg)";
			fila[0].style.borderBottom = "none";

			fila[1].style.transition = "transform 0s";
			fila[1].style.transform = "rotate(0deg)";
			fila[1].style.borderBottom = "none";
			fila[1].querySelector("p").style.opacity = "1";
			fila[1].querySelector("p").style.marginTop = "-25px";

			fila[2].style.transition = "transform 0s";
			fila[2].style.transform = "rotate(0deg)";

			var indiceFilaAux = fila[0];
			fila[0] = fila[1];
			fila[1] = fila[2];
			fila[2] = indiceFilaAux;

			equipeJogandoAgora = window.localStorage.getItem("equipeJogandoAgora");

			if (equipeJogandoAgora >= 3) {
				window.localStorage.setItem("equipeJogandoAgora", 1);
			}
			else {
				window.localStorage.setItem("equipeJogandoAgora", parseInt(equipeJogandoAgora) + 1);
			}
			
		}, 750);
	}

	else if (nEquipes == 4) {
		marginLeftAuxEquipe1 = "0";
		marginTopAuxEquipe1 = "-20";
		widthAuxEquipe1 = "132.194";
		heightAuxEquipe1 = "114";

		marginLeftAuxEquipe2 = "156.2";
		marginTopAuxEquipe2 = "73";
		widthAuxEquipe2 = "64.097";
		heightAuxEquipe2 = "49";

		marginLeftAuxEquipe3 = "228.2";
		marginTopAuxEquipe3 = "73";
		widthAuxEquipe3 = "64.097";
		heightAuxEquipe3 = "49";

		marginLeftAuxEquipe4 = "300.2";
		marginTopAuxEquipe4 = "73";
		widthAuxEquipe4 = "64.097";
		heightAuxEquipe4 = "49";

		fila[0].style.marginLeft =  marginLeftAuxEquipe4 + "px";
		fila[0].style.marginTop = marginTopAuxEquipe4 + "px";
		fila[0].style.width = widthAuxEquipe4 + "px";
		fila[0].style.height = heightAuxEquipe4 + "px";
		fila[0].style.backgroundColor = "#f3efe2";
		fila[0].style.border = "2px solid #f3efe2";
		fila[0].querySelector("p").style.opacity = "0";

		fila[1].style.marginLeft = marginLeftAuxEquipe1 + "px";
		fila[1].style.marginTop = marginTopAuxEquipe1 + "px";
		fila[1].style.width = widthAuxEquipe1 + "px";
		fila[1].style.height = heightAuxEquipe1 + "px";
		fila[1].style.border = "10px solid #f3efe2";
		fila[1].style.borderTop = "30px solid #f3efe2";
		fila[1].style.backgroundColor = "#E9A93F";

		fila[2].style.marginLeft =  marginLeftAuxEquipe2 + "px";
		fila[2].style.marginTop = marginTopAuxEquipe2 + "px";
		fila[2].style.width = widthAuxEquipe2 + "px";
		fila[2].style.height = heightAuxEquipe2 + "px";

		fila[3].style.marginLeft = marginLeftAuxEquipe3 + "px";
		fila[3].style.marginTop = marginTopAuxEquipe3 + "px";
		fila[3].style.width = widthAuxEquipe3 + "px";
		fila[3].style.height = heightAuxEquipe3 + "px";

		fila[0].style.transition = "all 0.7s linear";
		fila[0].style.transform = "rotateY(-360deg)";

		fila[1].style.transition = "all 0.7s linear";
		fila[1].style.transform = "rotateY(-360deg)";

		fila[2].style.transition = "all 0.7s linear";
		fila[2].style.transform = "rotateY(-360deg)";

		fila[3].style.transition = "all 0.7s linear";
		fila[3].style.transform = "rotateY(-360deg)";

		window.setTimeout(function() {
			fila[0].style.marginTop = "73px";
			fila[0].style.marginLeft = "300.2px";

			fila[0].style.transition = "transform 0s";
			fila[0].style.transform = "rotate(0deg)";
			fila[0].style.borderBottom = "none";

			fila[1].style.transition = "transform 0s";
			fila[1].style.transform = "rotate(0deg)";
			fila[1].style.borderBottom = "none";
			fila[1].querySelector("p").style.opacity = "1";
			fila[1].querySelector("p").style.marginTop = "-25px";

			fila[2].style.transition = "transform 0s";
			fila[2].style.transform = "rotate(0deg)";

			fila[3].style.transition = "transform 0s";
			fila[3].style.transform = "rotate(0deg)";

			var indiceFilaAux = fila[0];
			fila[0] = fila[1];
			fila[1] = fila[2];
			fila[2] = fila[3];
			fila[3] = indiceFilaAux;

			equipeJogandoAgora = window.localStorage.getItem("equipeJogandoAgora");

			if (equipeJogandoAgora >= 4) {
				window.localStorage.setItem("equipeJogandoAgora", 1);
			}
			else {
				window.localStorage.setItem("equipeJogandoAgora", parseInt(equipeJogandoAgora) + 1);
			}
		}, 750);
	}
}



