var espacoBotoes = document.getElementById("espacoBotoes").querySelectorAll("input");
var valueNames = ['e', 'b', 'j', 'm', 'r', 'v'];
for (var i = 0; i < espacoBotoes.length; i++) {
	espacoBotoes[i].onmouseover = function() {
		this.style.cursor = "pointer";
		if (this.name == "e") {
			this.style.background = "#283891 url('../img/icones/crowB.png')";
			this.style.backgroundSize = "60% 100%";
			this.style.backgroundRepeat = "no-repeat";
			this.style.backgroundPosition = "50%";
		}
		else {
			this.style.background = "#283891";
			this.style.color = "#F3EBE0";
		}
	}

	espacoBotoes[i].onmouseout = function() {
		this.style.cursor = "default";
		if (this.name == "e") {
			this.style.background = "#F3EBE0 url('../img/icones/crow.png')";
			this.style.backgroundSize = "60% 100%";
			this.style.backgroundRepeat = "no-repeat";
			this.style.backgroundPosition = "50%";
		}
		else {
			this.style.background = "#F3EBE0";
			this.style.color = "#283891";
		}
	}

	espacoBotoes[i].onclick = function() {
		var imgMostrada = document.getElementById("explicacaoSobre").querySelector("img");
		var textoMostradoH2 = document.getElementById("textoExplicativo").querySelector("h2");
		var textoMostradoP = document.getElementById("textoExplicativo").querySelectorAll("p");

		var name = this.name;

		imgMostrada.style.opacity = "0";
		textoMostradoH2.style.opacity = "0";
		textoMostradoP[0].style.opacity = "0";
		textoMostradoP[1].style.opacity = "0";
		textoMostradoP[2].style.opacity = "0";

		setTimeout(function() {
			if (name == valueNames[0]) {
				imgMostrada.src = "../img/logo.png";
				textoMostradoH2.innerText = 'Grupo Crows';
				textoMostradoP[0].innerText = 'Equipe responsável pela adaptação digital do jogo "Caminho da Libras".'
				textoMostradoP[1].innerText = 'Clique nos botões ao lado para informações dos membros.'
			}

			else if (name == valueNames[1]) {
				imgMostrada.src = "../img/equipe/bruno.png";
				textoMostradoH2.innerText = 'Bruno Cidade';
				textoMostradoP[0].innerText = 'Conteudista/Revisor/Designer de interação/Co-designer gráfico';
				textoMostradoP[1].innerText = 'Cursando Sistemas e Mídias Digitais na UFC.';
				textoMostradoP[2].innerText = 'brunocidade@live.com';
			}

			else if (name == valueNames[2]) {
				imgMostrada.src = "../img/equipe/joao.png";
				textoMostradoH2.innerText = 'João Vitor';
				textoMostradoP[0].innerText = 'Coordenador de testes/Co-programador';
				textoMostradoP[1].innerText = 'Cursando Sistemas e Mídias Digitais na UFC';
				textoMostradoP[2].innerText = 'joao.vitoor.batista@gmail.com';
			}

			else if (name == valueNames[3]) {
				imgMostrada.src = "../img/equipe/mayara2.png";
				textoMostradoH2.innerText = 'Mayara Apoliano';
				textoMostradoP[0].innerText = 'Designer de interface/Ilustradora';
				textoMostradoP[1].innerText = 'Cursando Sistemas e Mídias Digitais na UFC, atua como ilustradora freelancer.';
				textoMostradoP[2].innerText = 'bluejaypace@gmail.com';
			}

			else if (name == valueNames[4]) {
				imgMostrada.src = "../img/equipe/rondinelly.png";
				textoMostradoH2.innerText = 'Rondinelly Castelo';
				textoMostradoP[0].innerText = 'Programador';
				textoMostradoP[1].innerText = 'Cursando Sistemas e Mídias Digitais na UFC.';
				textoMostradoP[2].innerText = 'rondinellycastelo@gmail.com';
			}

			else if (name == valueNames[5]) {
				imgMostrada.src = "../img/equipe/vinicius.png";
				textoMostradoH2.innerText = 'Vinícius Castelo';
				textoMostradoP[0].innerText = 'Líder/Atendimento/Avaliador';
				textoMostradoP[1].innerText = 'Cursando Sistemas e Mídias Digitais na UFC.';
				textoMostradoP[2].innerText = 'viniciuscastelo16@gmail.com';
			}
		}, 801);

		setTimeout(function() {
			if (name != valueNames[0]) {
				imgMostrada.style.opacity = "1";
				textoMostradoH2.style.opacity = "1";
				textoMostradoP[0].style.opacity = "1";
				textoMostradoP[1].style.opacity = "1";
				textoMostradoP[2].style.opacity = "1";
			}
			else {
				imgMostrada.style.opacity = "1";
				textoMostradoH2.style.opacity = "1";
				textoMostradoP[0].style.opacity = "1";
				textoMostradoP[1].style.opacity = "1";
			}
		}, 1000);
	}
}