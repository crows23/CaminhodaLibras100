var botaoPontos = document.getElementById("botaoPontos");

botaoPontos.onclick = function() {
	var fundoPopup = document.getElementsByClassName("fundoPopup")[0];
	var popupPontos = document.getElementById("popupPontos");
	var botaoOk = document.getElementById("botaoOkPopupPontos").querySelector("input");

	var nEquipes = window.localStorage.getItem("nEquipes");
	var nomeEquipes = document.getElementById("nomeEquipes").querySelectorAll("p");
	var pontosEquipes = document.getElementById("pontos").querySelectorAll("p");

	var pontuacaoEquipes = informacoesEquipes.slice(0);

	for (var i = nomeEquipes.length - 1; i >= nEquipes; i--) {
		nomeEquipes[i].style.display = "none";
		pontosEquipes[i].style.display = "none";
	}

	for (var i = 0; i < pontuacaoEquipes.length; i++) {
		for (var j = 0; j < pontuacaoEquipes.length; j++) {
			if (j != i) {
				if (pontuacaoEquipes[j][2] < pontuacaoEquipes[i][2]) {
					equipeAux = pontuacaoEquipes[i];
					pontuacaoEquipes[i] = pontuacaoEquipes[j];
					pontuacaoEquipes[j] = equipeAux;
				}
			}
		}
	}

	for (var i = 0; i < pontuacaoEquipes.length; i++) {
		nomeEquipes[i].innerText = (i+1) + " - " + pontuacaoEquipes[i][0].querySelector("p").innerText;
		pontosEquipes[i].innerText = pontuacaoEquipes[i][2];
	}

	fundoPopup.style.display = "block";
	popupPontos.style.display = "block";

	botaoOk.onclick = function() {
		fundoPopup.style.display = "none";
		popupPontos.style.display = "none";
		this.onclick = null;
	}

	botaoOk.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
		this.style.transform = "rotate(4deg)";
	}

	botaoOk.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "4px solid #eaab3b";
		this.style.transform = "rotate(0deg)";
	}
}

botaoPontos.querySelector("input").onmouseover = function() {
	botaoPontos.style.marginTop = "0px";
	this.style.border = "2px solid #283891";
	this.style.borderBottom = "none";
	this.style.cursor = "pointer";
}

botaoPontos.querySelector("input").onmouseout = function() {
	botaoPontos.style.marginTop = "20px";
	this.style.border = "2px solid #f3efe2";
	this.style.borderBottom = "none";
	this.style.cursor = "default";
}