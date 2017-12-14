var equipeVencedora;

window.setInterval(function() {
	equipeJogandoAgora = window.localStorage.getItem("equipeJogandoAgora");
	equipeVencedora = mostrarCasaAtual(equipeJogandoAgora);

	if (equipeVencedora == "Chegada") {
		var fundoPopup = document.getElementsByClassName("fundoPopup")[0];
		var popupChegada = document.getElementById("popupEquipeChegouFinal");
		var botaoOk = document.getElementById("botaoOkEquipeChegouFinal").querySelector("input");
		var nomeEquipeChegouFinal = document.getElementById("textoEquipeChegouFinal").querySelector("p");

		nomeEquipeChegouFinal.innerText = window.localStorage.getItem("nomeEquipeOrdenado" + equipeJogandoAgora) + "\n chegou ao final"
		fundoPopup.style.display = "block";
		popupChegada.style.display = "block";

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

		botaoOk.onclick = function() {
			var pontuacaoEquipes = informacoesEquipes.slice(0);
			var nomeEquipes = document.getElementById("nomeEquipes").querySelectorAll("p");
			var pontosEquipes = document.getElementById("pontos").querySelectorAll("p");

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
				window.localStorage.setItem("nomeEquipe" + (i+1) + "lugar", (i+1) + " - " + pontuacaoEquipes[i][0].querySelector("p").innerText);
				window.localStorage.setItem("pontosEquipe" + (i+1) + "lugar", pontuacaoEquipes[i][2]);
			}

			window.location = "fim_de_jogo.html";
		}
	}
}, 100);