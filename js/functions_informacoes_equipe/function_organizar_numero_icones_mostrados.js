function organizar_numero_icones_mostrados() {
	var figuresPopup = document.getElementById("containerInformacoesEquipe").querySelectorAll("figure");
	var figuresNone = 0;

	if (window.localStorage.getItem("popupMudou") != null) {
		figuresPopup[window.localStorage.getItem("idPopup")].style.display = window.localStorage.getItem("popupMudou");

		for (var i = 0; i < figuresPopup.length; i++) {
			if (figuresPopup[i].style.display == "none") {
				figuresNone++;
			}
		}
	}
	else {
		for (var i = 0; i < figuresPopup.length; i++) {
			if (figuresPopup[i].style.display == "none") {
				figuresNone++;
			}
		}
	}

	switch(figuresNone) {
		case 1:
			var indice;
			for (var i = 0; i < figuresPopup.length; i++) {
				if (figuresPopup[i].style.display == "none") {
					indice = i;
					break;
				}
			}

			if (indice == 0) {
				figuresPopup[1].style.marginLeft = "0px";
			}
			break;

		case 2:
			var indice = [];
			for (var i = 0; i < figuresPopup.length; i++) {
				if (figuresPopup[i].style.display == "none") {
					indice.push(i);
				}
			}

			if (indice[0] == 0) {
				if (indice[1] == 1) {
					figuresPopup[2].style.marginLeft = "0px";
				}
				else {
					figuresPopup[1].style.marginLeft = "0px";
				}
			}
			break;

		case 3:
			var indice = [];
			for (var i = 0; i < figuresPopup.length; i++) {
				if (figuresPopup[i].style.display == "none") {
					indice.push(i);
				}
			}

			if (indice[0] == 0) {
				if (indice[1] == 1) {
					if (indice[2] == 2) {
						figuresPopup[3].style.marginLeft = "0px";
					}
					else {
						figuresPopup[2].style.marginLeft = "0px";
					}
				}
				else {
					figuresPopup[1].style.marginLeft = "0px";
				}
			}
			break;
	}
}
