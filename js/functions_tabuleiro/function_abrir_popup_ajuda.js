var botaoAjuda = document.getElementById("botaoAjuda");

botaoAjuda.querySelector("input").onclick = function() {
	var popupAjuda = document.getElementById("popupAjuda");
	var fundoPopup = document.getElementsByClassName("fundoPopup")[0];

	var regras1 = document.getElementById("regras1");
	var regras2 = document.getElementById("regras2");

	var botaoVoltarRegras1 = document.getElementById("botaoVoltarRegras1").querySelector("input");
	var botaoProsseguirRegras1 = document.getElementById("botaoProsseguirRegras1").querySelector("input");

	var botaoVoltarRegras2 = document.getElementById("botaoVoltarRegras2").querySelector("input");
	var botaoProsseguirRegras2 = document.getElementById("botaoProsseguirRegras2").querySelector("input");

	var espacoBotoesAjuda = document.getElementById("espacoBotoesAjuda").querySelectorAll("input");
	var valueNames = ['1', '2', '3', '4', 'desafio', 'ily'];

	fundoPopup.style.display = "block";
	popupAjuda.style.display = "block";
	regras1.style.display = "block";

	// FUNCTIONS HOVERS
	botaoVoltarRegras1.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.backgroundColor = "#283891";
		this.style.color = "#F3EBE0";
		this.style.transform = "rotate(-4deg)";
	}

	botaoProsseguirRegras1.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
		this.style.transform = "rotate(4deg)";
	}

	botaoVoltarRegras2.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.backgroundColor = "#283891";
		this.style.color = "#F3EBE0";
		this.style.transform = "rotate(-4deg)";
	}

	botaoProsseguirRegras2.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
		this.style.transform = "rotate(4deg)";
	}

	// FUNCTIOSN OUTS
	botaoVoltarRegras1.onmouseout = function() {
		this.style.cursor = "default";
		this.style.backgroundColor = "#F3EBE0";
		this.style.color = "#283891";
		this.style.transform = "rotate(0deg)";
	}

	botaoProsseguirRegras1.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "4px solid #eaab3b";
		this.style.transform = "rotate(0deg)";
	}

	botaoVoltarRegras2.onmouseout = function() {
		this.style.cursor = "default";
		this.style.backgroundColor = "#F3EBE0";
		this.style.color = "#283891";
		this.style.transform = "rotate(0deg)";
	}

	botaoProsseguirRegras2.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "4px solid #eaab3b";
		this.style.transform = "rotate(0deg)";
	}

	botaoVoltarRegras1.onclick = function() {
		regras1.style.display = "none";
		regras2.style.display = "none";
		fundoPopup.style.display = "none";
		popupAjuda.style.display = "none";
	}

	botaoVoltarRegras2.onclick = function() {
		regras2.style.display = "none";
		regras1.style.display = "block";
	}

	botaoProsseguirRegras1.onclick = function() {
		regras1.style.display = "none";
		regras2.style.display = "block";
	}

	botaoProsseguirRegras2.onclick = function() {
		regras1.style.display = "none";
		regras2.style.display = "none";
		fundoPopup.style.display = "none";
		popupAjuda.style.display = "none";
	}

	for (var i = 0; i < espacoBotoesAjuda.length; i++) {
		espacoBotoesAjuda[i].onmouseover = function() {
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

		espacoBotoesAjuda[i].onmouseout = function() {
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

		espacoBotoesAjuda[i].onclick = function() {
			var imgMostrada = document.getElementById("containerRegras2");
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
}

botaoAjuda.querySelector("input").onmouseover = function() {
	botaoAjuda.style.marginTop = "0px";
	this.style.border = "2px solid #283891";
	this.style.borderBottom = "none";
	this.style.cursor = "pointer";
}

botaoAjuda.querySelector("input").onmouseout = function() {
	botaoAjuda.style.marginTop = "20px";
	this.style.border = "2px solid #f3efe2";
	this.style.borderBottom = "none";
	this.style.cursor = "default";
}