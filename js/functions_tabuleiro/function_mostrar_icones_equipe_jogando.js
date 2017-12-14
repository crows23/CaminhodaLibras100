var nEquipes = window.localStorage.getItem("nEquipes");
var equipesJogando = document.getElementById("espacoIcones").querySelectorAll("figure");
var informacoesEquipes = [];

for (var i = 0; i < nEquipes; i++) {
	equipesJogando[i].querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado" + (i+1));
	equipesJogando[i].querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado" + (i+1));

	informacoesEquipes.push([equipesJogando[i], 0, 0]);
}

for (var i = equipesJogando.length - 1; i >= nEquipes; i--) {
	equipesJogando[i].style.display = "none";
}

for (var i = 0; i < informacoesEquipes.length; i++) {
	informacoesEquipes[i][0].onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.borderColor = "#283891";
		this.querySelector("p").style.color = "#f3efe2";
	}

	informacoesEquipes[i][0].onmouseout = function() {
		this.style.cursor = "default";
		this.style.borderColor = "#f3efe2";
		this.querySelector("p").style.color = "#283891";
	}

	informacoesEquipes[i][0].onclick = function() {
		nomeEquipe = this.querySelector("p").innerText;
		imgEquipe = this.querySelector("img").getAttribute("src");

		var fundoPopup = document.getElementsByClassName("fundoPopup")[0];
		var popupDadosEquipe = document.getElementById("popupDadosEquipe");
		var containerDadosEquipe = document.getElementById("containerDadosEquipe");

		var botaoOkDados = document.getElementById("botaoOkDados").querySelector("input");

		var casa = document.getElementById("dados").querySelectorAll("p")[5];
		var pontos = document.getElementById("dados").querySelectorAll("p")[4];

		popupDadosEquipe.style.display = "block";
		fundoPopup.style.display = "block";

		containerDadosEquipe.querySelector("figure").querySelector("img").src = imgEquipe;
		containerDadosEquipe.querySelector("#nomeEquipeDados").innerText = nomeEquipe;

		containerDadosEquipe.querySelector("figure").querySelector("img").style.width = "100%";
		containerDadosEquipe.querySelector("figure").querySelector("img").style.height = "100%";

		for (var i = 0; i < informacoesEquipes.length; i++) {
			if (this.id == informacoesEquipes[i][0].id) {
				if (informacoesEquipes[i][1] != 0 && informacoesEquipes[i][1] != 25) {
					casa.innerText = informacoesEquipes[i][1];
				}
				else if (informacoesEquipes[i][1] == 0) {
					casa.innerText = "Início";
				}
				else {
					casa.innerText = "Chegada";
				}
			}
		}

		for (var i = 0; i < informacoesEquipes.length; i++) {
			if (this.id == informacoesEquipes[i][0].id) {
				pontos.innerText = informacoesEquipes[i][2];
			}
		}

		botaoOkDados.onclick = function() {
			popupDadosEquipe.style.display = "none";
			fundoPopup.style.display = "none";
			this.onclick = null;
		}

		botaoOkDados.onmouseover = function() {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #283891";
			this.style.transform = "rotate(4deg)";
		}

		botaoOkDados.onmouseout = function() {
			this.style.cursor = "default";
			this.style.border = "4px solid #eaab3b";
			this.style.transform = "rotate(0deg)";
		}
	}
}