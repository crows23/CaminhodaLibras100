var videosAzul = ["../videos/azul/01.mp4", "../videos/azul/02.mp4", "../videos/azul/03.mp4", "../videos/azul/04.mp4", "../videos/azul/05.mp4", "../videos/azul/06.mp4", "../videos/azul/07.mp4", "../videos/azul/08.mp4", "../videos/azul/09.mp4", "../videos/azul/10.mp4"];
var videosVerde =  ["../videos/verde/01.mp4", "../videos/verde/02.mp4", "../videos/verde/03.mp4", "../videos/verde/04.mp4", "../videos/verde/05.mp4", "../videos/verde/06.mp4", "../videos/verde/07.mp4", "../videos/verde/08.mp4", "../videos/verde/09.mp4", "../videos/verde/10.mp4", "../videos/verde/11.mp4", "../videos/verde/12.mp4", "../videos/verde/13.mp4", "../videos/verde/14.mp4", "../videos/verde/15.mp4"];
var videosLaranja =  ["../videos/laranja/01.mp4", "../videos/laranja/02.mp4", "../videos/laranja/03.mp4", "../videos/laranja/04.mp4", "../videos/laranja/05.mp4", "../videos/laranja/06.mp4", "../videos/laranja/07.mp4", "../videos/laranja/08.mp4", "../videos/laranja/09.mp4", "../videos/laranja/10.mp4"];
var videosVermelho =  ["../videos/vermelho/01.mp4", "../videos/vermelho/02.mp4", "../videos/vermelho/03.mp4", "../videos/vermelho/04.mp4", "../videos/vermelho/05.mp4", "../videos/vermelho/06.mp4", "../videos/vermelho/07.mp4", "../videos/vermelho/08.mp4", "../videos/vermelho/09.mp4", "../videos/vermelho/10.mp4"];
var videosDesafio =  ["../videos/desafio/01.mp4", "../videos/desafio/02.mp4", "../videos/desafio/03.mp4", "../videos/desafio/04.mp4", "../videos/desafio/05.mp4", "../videos/desafio/06.mp4", "../videos/desafio/07.mp4", "../videos/desafio/08.mp4", "../videos/desafio/09.mp4", "../videos/desafio/10.mp4", "../videos/desafio/11.mp4"];


function abrirPopupPergunta(dificuldade, equipeJogandoAgora) {
	var box = document.querySelector(".container").children[0];
	var fundoPopup = document.getElementsByClassName("fundoPopup")[0];
	var fundoPopup2 = document.getElementsByClassName("fundoPopup")[1];

	var popupPergunta = document.getElementById("popupPergunta");

	var informacaoPergunta = document.getElementById("containerInformacoesPergunta").querySelectorAll("h1");
	var nomeEquipe = document.getElementById("popupPergunta").querySelector("h3");

	var botaoPassarVez = document.getElementById("botaoPassouAVez").querySelector("input");
	var botaoErrou = document.getElementById("botaoErrou").querySelector("input");
	var botaoAcertou = document.getElementById("botaoAcertou").querySelector("input");

	var opcaoVideo = window.localStorage.getItem("opcaoVideo");

	var dificuldadePergunta = ["Fácil", "Médio", "Difícil", "Muito Difícil", "Desafio"];
	var botaoPopupILoveYou = document.getElementById("botaoPopupILoveYou").querySelector("input");
	var modoPergunta;
	var textoPergunta;
	var conteudoPergunta;
	var quantidadePontos;
	var quantidadeCasas;
	
	if (dificuldade!="ILoveYou") {
		if (opcaoVideo == 'V') {
			var vid = document.getElementById("myVideo");
			if (dificuldade == "Fácil"){
				var index = Math.floor(Math.random() * (videosAzul.length));
				
				var thisVideo = videosAzul[index];
				vid.querySelector("source").src = thisVideo;
				
				vid.load();
				videosAzul.splice(index, 1);
			}
			else if (dificuldade== "Médio"){
				var index = Math.floor(Math.random() * (videosVerde.length));
				
				var thisVideo = videosVerde[index];
				vid.querySelector("source").src = thisVideo;
				
				vid.load();
				videosVerde.splice(index, 1);
			}
			else if (dificuldade== "Difícil"){
				var index = Math.floor(Math.random() * (videosLaranja.length));
				
				var thisVideo = videosLaranja[index];
				vid.querySelector("source").src = thisVideo;
				
				vid.load();
				videosLaranja.splice(index, 1);
			}
			else if (dificuldade== "Muito Difícil"){
				var index = Math.floor(Math.random() * (videosVermelho.length));
				
				var thisVideo = videosVermelho[index];
				vid.querySelector("source").src = thisVideo;
				
				vid.load();
				videosVermelho.splice(index, 1);
			}
			else if (dificuldade== "Desafio"){
				var index = Math.floor(Math.random() * (videosDesafio.length));
				
				var thisVideo = videosDesafio[index];
				vid.querySelector("source").src = thisVideo;
				
				vid.load();
				videosDesafio.splice(index, 1);
			} 
		
			document.getElementById("containerPergunta").querySelectorAll("div")[1].style.display = "none";
			modoPergunta = document.getElementById("containerPergunta").querySelectorAll("div")[0];
		}
		else {
			document.getElementById("containerPergunta").querySelectorAll("div")[0].style.display = "none";
			modoPergunta = document.getElementById("containerPergunta").querySelectorAll("div")[1];
			textoPergunta = document.getElementById("textoPergunta").querySelector("input");
			conteudoPergunta = document.getElementById("textoPergunta").querySelector("p");
		}


		for (var i = 0; i < dificuldadePergunta.length; i++) {
			if (dificuldade == dificuldadePergunta[i]) {
				if (i < 2) {
					quantidadePontos = ((i+1) * 10);
					quantidadeCasas = (i+1);
				}
				else if (i == 2) {
					quantidadePontos = 30;
					quantidadeCasas = 3;
				}
				else if (i == 3) {
					quantidadePontos = 40;
					quantidadeCasas = 3;
				}
				else {
					quantidadePontos = 60;
					quantidadeCasas = 3;
				}
			}
		}

		modoPergunta.style.display = "block";
		fundoPopup.style.display = "block";
		popupPergunta.style.display = "block";

		informacaoPergunta[1].innerText = dificuldade;
		informacaoPergunta[3].innerText = quantidadePontos;
		nomeEquipe.innerText = "Pergunta para a " + window.localStorage.getItem("nomeEquipeOrdenado" + equipeJogandoAgora);

		if (textoPergunta != null) {
			textoPergunta.oninput = function() {
				conteudoPergunta.innerText = this.value;
			}
		}
	}
	else {
		fundoPopup2.style.display = "block";
		document.getElementById("popupILoveYou").style.display = "block";
		botaoPopupILoveYou.onmouseover = function () {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #283891";
			this.style.transform = "rotate(4deg)";
		}
		botaoPopupILoveYou.onmouseout = function () {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #eaab3b";
			this.style.transform = "rotate(0deg)";
		}
	}


	botaoPopupILoveYou.onclick = function() {
		fundoPopup2.style.display = "none";
		document.getElementById("popupILoveYou").style.display = "none";

		if (informacoesEquipes[equipeJogandoAgora-1][1] + 3 <= 26) {
			informacoesEquipes[equipeJogandoAgora-1][1] = informacoesEquipes[equipeJogandoAgora-1][1] + 3;
		}
		else {
			informacoesEquipes[equipeJogandoAgora-1][1] = 26;
		}

		informacoesEquipes[equipeJogandoAgora-1][2] = parseInt(informacoesEquipes[equipeJogandoAgora-1][2]) + 30;
		
		moverPinoFrente(3, equipeJogandoAgora);
		mudarEquipeJogandoAgora();
		box.onclick = function() {
			girarDado();
			box.onclick = null;
		}
	}


	botaoPassarVez.onclick = function() {
		var popupPassarVez = document.getElementById("popupPassarAVez");

		var botaoSim = document.getElementById("botaoSimPopupPassarVez").querySelector("input");
		var botaoNao = document.getElementById("botaoNaoPopupPassarVez").querySelector("input");

		popupPassarVez.style.display = "block";
		fundoPopup2.style.display = "block";

		botaoSim.onclick = function () {
			popupPassarVez.style.display = "none";
			fundoPopup2.style.display = "none";

			fundoPopup.style.display = "none";
			popupPergunta.style.display = "none";

			if (textoPergunta != null) {
				conteudoPergunta.innerText = "";
				textoPergunta.value = "";
			}

			mudarEquipeJogandoAgora();
			box.onclick = function() {
				girarDado();
				box.onclick = null;
			}
		}

		botaoNao.onclick = function () {
			popupPassarVez.style.display = "none";
			fundoPopup2.style.display = "none";
		}

		botaoSim.onmouseover = function () {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #283891";
			this.style.transform = "rotate(4deg)";
		}

		
		botaoNao.onmouseover = function () {
			this.style.cursor = "pointer";
			this.style.backgroundColor = "#283891";
			this.style.color = "#F3EBE0";
			this.style.transform = "rotate(-4deg)";
		}

		botaoSim.onmouseout = function () {
			this.style.cursor = "default";
			this.style.border = "4px solid #eaab3b";
			this.style.transform = "rotate(0deg)";
		}

		botaoNao.onmouseout = function () {
			this.style.cursor = "default";
			this.style.backgroundColor = "#F3EBE0";
			this.style.color = "#283891";
			this.style.transform = "rotate(0deg)";
		}

	}

	botaoErrou.onclick = function() {
		var popupRespostaErrada = document.getElementById("popupRespostaErrada");
		var botaoOkErrou = document.getElementById("botaoOkErrou").querySelector("input");

		var conteudoResposta = document.getElementById("textoPopupRespostaErrada").querySelectorAll("p");

		popupRespostaErrada.style.display = "block";
		fundoPopup2.style.display = "block";

		conteudoResposta[0].innerText = window.localStorage.getItem("nomeEquipeOrdenado" + equipeJogandoAgora) + " errou .-.";
		conteudoResposta[1].innerText = "Volte " + quantidadeCasas + " casa(s) .-.";
		conteudoResposta[2].innerText = "Total de pontos perdidos: " + quantidadePontos;

		botaoOkErrou.onclick = function() {
			popupRespostaErrada.style.display = "none";
			fundoPopup2.style.display = "none";

			fundoPopup.style.display = "none";
			popupPergunta.style.display = "none";

			if (textoPergunta != null) {
				conteudoPergunta.innerText = "";
				textoPergunta.value = "";
			}

			if (informacoesEquipes[equipeJogandoAgora-1][1] - quantidadeCasas >= 0) {
				informacoesEquipes[equipeJogandoAgora-1][1] = informacoesEquipes[equipeJogandoAgora-1][1] - quantidadeCasas;
			}
			else {
				informacoesEquipes[equipeJogandoAgora-1][1] = 0;
			}

			if (informacoesEquipes[equipeJogandoAgora-1][2] - quantidadePontos >= 0) {
				informacoesEquipes[equipeJogandoAgora-1][2] = informacoesEquipes[equipeJogandoAgora-1][2] - quantidadePontos;
			}
			else {
				informacoesEquipes[equipeJogandoAgora-1][2] = 0;
			}

			moverPinoTras(quantidadeCasas, equipeJogandoAgora);
			mudarEquipeJogandoAgora();
			box.onclick = function() {
				girarDado();
				box.onclick = null;
			}
		}

		botaoOkErrou.onmouseover = function() {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #283891";
			this.style.transform = "rotate(4deg)";
		}

		botaoOkErrou.onmouseout = function() {
			this.style.cursor = "default";
			this.style.border = "4px solid #eaab3b";
			this.style.transform = "rotate(0deg)";
		}
	}

	botaoAcertou.onclick = function() {
		var popupRespostaCorreta = document.getElementById("popupRespostaCorreta");
		var botaoOkAcertou = document.getElementById("botaoOkAcertou").querySelector("input");

		var conteudoResposta = document.getElementById("textoPopupRespostaCorreta").querySelectorAll("p");

		popupRespostaCorreta.style.display = "block";
		fundoPopup2.style.display = "block";

		conteudoResposta[0].innerText = window.localStorage.getItem("nomeEquipeOrdenado" + equipeJogandoAgora) + " acertou!";
		conteudoResposta[1].innerText = "Avance " + quantidadeCasas + " casa(s)";
		conteudoResposta[2].innerText = "Total de pontos adquiridos: " + quantidadePontos;

		botaoOkAcertou.onclick = function() {
			popupRespostaCorreta.style.display = "none";
			fundoPopup2.style.display = "none";

			fundoPopup.style.display = "none";
			popupPergunta.style.display = "none";

			if (textoPergunta != null) {
				conteudoPergunta.innerText = "";
				textoPergunta.value = "";
			}

			if (informacoesEquipes[equipeJogandoAgora-1][1] + quantidadeCasas <= 26) {
				informacoesEquipes[equipeJogandoAgora-1][1] = informacoesEquipes[equipeJogandoAgora-1][1] + quantidadeCasas;
			}
			else {
				informacoesEquipes[equipeJogandoAgora-1][1] = 26;
			}

			informacoesEquipes[equipeJogandoAgora-1][2] = parseInt(informacoesEquipes[equipeJogandoAgora-1][2]) + quantidadePontos;
			
			moverPinoFrente(quantidadeCasas, equipeJogandoAgora);
			mudarEquipeJogandoAgora();
			box.onclick = function() {
				girarDado();
				box.onclick = null;
			}
		}

		botaoOkAcertou.onmouseover = function() {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #283891";
			this.style.transform = "rotate(4deg)";
		}

		botaoOkAcertou.onmouseout = function() {
			this.style.cursor = "default";
			this.style.border = "4px solid #eaab3b";
			this.style.transform = "rotate(0deg)";
		}
	}

	botaoPassarVez.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
		this.style.transform = "rotate(4deg)";
	}

	botaoErrou.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
		this.style.transform = "rotate(4deg)";
	}

	botaoAcertou.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
		this.style.transform = "rotate(4deg)";
	}

	botaoPassarVez.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "4px solid #eaab3b";
		this.style.transform = "rotate(0deg)";
	}

	botaoErrou.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "4px solid #eaab3b";
		this.style.transform = "rotate(0deg)";
	}

	botaoAcertou.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "4px solid #eaab3b";
		this.style.transform = "rotate(0deg)";
	}
}