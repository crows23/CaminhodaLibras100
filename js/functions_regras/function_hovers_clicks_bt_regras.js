var espacoBotoes = document.getElementById("espacoBotoes").querySelectorAll("input");
var valueNames = ['1', '2', '3', '4', 'desafio', 'ily'];

for (var i = 0; i < espacoBotoes.length; i++) {
	espacoBotoes[i].onmouseover = function() {
		this.style.cursor = "pointer";
		if (this.name == "desafio") {
			this.style.background = "#283891 url('../img/icones/icon_desafioB.png')";
			this.style.backgroundRepeat = "no-repeat";
			this.style.backgroundPosition = "50% 50%";
		}
		else if (this.name == "ily") {
			this.style.background = "#283891 url('../img/icones/icon_ilyB.png')";
			this.style.backgroundRepeat = "no-repeat";
			this.style.backgroundPosition = "50% 50%";
		}
		else {
			this.style.background = "#283891";
			this.style.color = "#F3EBE0";
		}
	}

	espacoBotoes[i].onmouseout = function() {
		this.style.cursor = "default";
		if (this.name == "desafio") {
			this.style.background = "#F3EBE0 url('../img/icones/icon_desafio.png')";
			this.style.backgroundRepeat = "no-repeat";
			this.style.backgroundPosition = "50% 50%";
		}
		else if (this.name == "ily") {
			this.style.background = "#F3EBE0 url('../img/icones/icon_ily.png')";
			this.style.backgroundRepeat = "no-repeat";
			this.style.backgroundPosition = "50% 50%";
		}
		else {
			this.style.background = "#F3EBE0";
			this.style.color = "#283891";
		}
	}

	espacoBotoes[i].onclick = function() {
		var imgMostrada = document.getElementById("explicacaoRegra");
		var textoMostradoH2 = document.getElementById("textoExplicativo").querySelector("h2");
		var textoMostradoP = document.getElementById("textoExplicativo").querySelectorAll("p");

		var name = this.name;

		imgMostrada.querySelector("figure").style.opacity = "0";
		imgMostrada.querySelector("img").style.opacity = "0";
		textoMostradoH2.style.opacity = "0";
		textoMostradoP[0].style.opacity = "0";
		textoMostradoP[1].style.opacity = "0";

		setTimeout(function() {
			if (name == valueNames[0]) {
				imgMostrada.querySelector("figure").style.background = "#6075bd";
				imgMostrada.querySelector("img").src = "../img/facesDado/1.png";
				textoMostradoH2.innerText = 'Dificuldade: Fácil';
				textoMostradoP[0].innerText = 'Ao acertar uma questão de nível fácil, avance 1 casa.';
				textoMostradoP[1].innerText = 'Pontos adquiridos: 10';
			}

			else if (name == valueNames[1]) {
				imgMostrada.querySelector("figure").style.background = "#182b68";
				imgMostrada.querySelector("img").src = "../img/facesDado/2.png";
				textoMostradoH2.innerText = 'Dificuldade: Médio';
				textoMostradoP[0].innerText = 'Ao acertar uma questão de nível médio, avance 2 casas.';
				textoMostradoP[1].innerText = 'Pontos adquiridos: 20';
			}

			else if (name == valueNames[2]) {
				imgMostrada.querySelector("figure").style.background = "#df900c";
				imgMostrada.querySelector("img").src = "../img/facesDado/3.png";
				textoMostradoH2.innerText = 'Dificuldade: Difícil';
				textoMostradoP[0].innerText = 'Ao acertar uma questão de nível difícil, avance 3 casas.';
				textoMostradoP[1].innerText = 'Pontos adquiridos: 30';
			}

			else if (name == valueNames[3]) {
				imgMostrada.querySelector("figure").style.background = "#99450e";
				imgMostrada.querySelector("img").src = "../img/facesDado/4.png";
				textoMostradoH2.innerText = 'Dificuldade: Muito Difícil';
				textoMostradoP[0].innerText = 'Ao acertar uma questão de nível muito difícil, avance 3 casas.';
				textoMostradoP[1].innerText = 'Pontos adquiridos: 40';
			}

			else if (name == valueNames[4]) {
				imgMostrada.querySelector("figure").style.background = "#0b1238";
				imgMostrada.querySelector("img").src = "../img/facesDado/desafio.png";
				textoMostradoH2.innerText = 'Dificuldade: Desafio';
				textoMostradoP[0].innerText = 'Ao acertar uma questão de nível desafio, avance 3 casas.';
				textoMostradoP[1].innerText = 'Pontos adquiridos: 60';
			}

			else if (name == valueNames[5]) {
				imgMostrada.querySelector("figure").style.background = "#ffd767";
				imgMostrada.querySelector("img").src = "../img/facesDado/ily.png";
				textoMostradoH2.innerText = 'Dificuldade: ILoveYou';
				textoMostradoP[0].innerText = 'Ao cair no ILoveYou, avance 3 casas.';
				textoMostradoP[1].innerText = 'Pontos adquiridos: 30';
			}
		}, 801);

		setTimeout(function() {
			if (name != valueNames[0]) {
				imgMostrada.querySelector("figure").style.opacity = "1";
				imgMostrada.querySelector("img").style.opacity = "1";
				textoMostradoH2.style.opacity = "1";
				textoMostradoP[0].style.opacity = "1";
				textoMostradoP[1].style.opacity = "1";
				textoMostradoP[2].style.opacity = "1";
			}
			else {
				imgMostrada.querySelector("figure").style.opacity = "1";
				imgMostrada.querySelector("img").style.opacity = "1";
				textoMostradoH2.style.opacity = "1";
				textoMostradoP[0].style.opacity = "1";
				textoMostradoP[1].style.opacity = "1";
			}
		}, 1000);
	}
}