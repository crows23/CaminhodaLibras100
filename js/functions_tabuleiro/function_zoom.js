var equipesJogando = document.getElementById("espacoIcones").querySelectorAll("figure");
var botaoCentralizar = document.getElementById("botaoCentralizarTela");
var botaoZoom = document.getElementById("botaoZoom");
var tabuleiro = document.getElementById("tabuleiro");

botaoZoom.querySelector("input").onmouseover = function() {
	this.style.border = "2px solid #283891";
	this.style.cursor = "pointer";

	if (this.value == "Zoom") {
		botaoZoom.style.marginTop = "0px";
		this.style.borderBottom = "none";
	}
	else {
		this.style.height = "53px";
		this.style.borderTop = "none";
	}
}

botaoZoom.querySelector("input").onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "2px solid #f3efe2";

	if (this.value == "Zoom") {
		botaoZoom.style.marginTop = "20px";
		this.style.borderBottom = "none";
	}

	else {
		this.style.height = "33px";
		this.style.borderTop = "none";
	}
	
}

botaoZoom.querySelector("input").onclick = function() {
	if (this.value == "Zoom") {
		document.getElementById("espacoBotoesOpcao").style.display = "none";

		this.value = "Zoom out";
		this.style.height = "33px";
		this.style.borderTopLeftRadius = "0px";
		this.style.borderTopRightRadius = "0px";
		this.style.borderBottomLeftRadius = "10px";
		this.style.borderBottomRightRadius = "10px";
		this.style.backgroundImage = "url('../img/icones/zoomout.png')";
		this.style.backgroundPosition = "5% 50%";
		this.style.paddingRight = "5px";
		this.style.paddingBottom = "0px";

		document.getElementsByClassName("container")[0].style.display = "none";
		
		document.getElementById("espacoBotoesOpcao").style.width = "400px";
		document.getElementById("espacoBotoesOpcao").style.marginTop = "0px";
		document.getElementById("espacoBotoesOpcao").style.marginLeft = "683px";

		document.getElementById("botaoPontos").style.display = "none";
		document.getElementById("botaoOpcoes").style.display = "none";
		document.getElementById("botaoAjuda").style.display = "none";

		for (var i = 0; i < informacoesEquipes.length; i++) {
			informacoesEquipes[i][0].style.display = "none";
		}

		$(tabuleiro).animate({"zoom" : 2}, 800);

		$(tabuleiro).draggable({
			containment: $("#tabuleiroZoom")
		});

		setTimeout(function() {
			botaoCentralizar.style.display = "block";
			document.getElementById("espacoBotoesOpcao").style.display = "block";
		}, 800);

		tabuleiro.onmousedown = function() {
			botaoZoom.querySelector("input").style.opacity = "0";
			botaoCentralizar.querySelector("input").style.opacity = "0";
			document.getElementById("botaoSair").style.opacity = "0";
			document.getElementById("mostradorCasaAtual").style.opacity = "0";
		}

		tabuleiro.onmouseup = function() {
			botaoZoom.querySelector("input").style.opacity = "1";
			botaoCentralizar.querySelector("input").style.opacity = "1";
			document.getElementById("botaoSair").style.opacity = "1";
			document.getElementById("mostradorCasaAtual").style.opacity = "1";
		}

	}
	else {
		document.getElementById("espacoBotoesOpcao").style.display = "none";
		botaoCentralizar.style.display = "none";

		this.value = "Zoom";
		this.style.backgroundImage = "url('../img/icones/zoomin.png')";
		this.style.backgroundPosition = "15% 25%";
		this.style.paddingRight = "15px";
		this.style.paddingBottom = "17.5px";

		tabuleiro.style.top = "0px";
		tabuleiro.style.left = "0px";
		tabuleiro.style.transition = "all 0.2s linear";
		tabuleiro.onmousedown = null;
		tabuleiro.onmouseup = null;

		$(tabuleiro).animate({"zoom" : 1}, 500);
		$(tabuleiro).draggable("destroy");

		window.setTimeout(function() {
			document.getElementById("espacoBotoesOpcao").style.display = "block";

			botaoZoom.querySelector("input").style.borderTopLeftRadius = "10px";
			botaoZoom.querySelector("input").style.borderTopRightRadius = "10px";
			botaoZoom.querySelector("input").style.borderBottomLeftRadius = "0px";
			botaoZoom.querySelector("input").style.borderBottomRightRadius = "0px";
			botaoZoom.querySelector("input").style.transition = "all 0.1s linear";

			tabuleiro.style.transition = "";
			botaoCentralizar.style.display = "none";

			document.getElementsByClassName("container")[0].style.display = "block";
			document.getElementById("espacoBotoesOpcao").style.width = "362px";
			document.getElementById("espacoBotoesOpcao").style.marginTop = "715px";
			document.getElementById("espacoBotoesOpcao").style.marginLeft = "984px";

			document.getElementById("botaoPontos").style.display = "block";
			document.getElementById("botaoOpcoes").style.display = "block";
			document.getElementById("botaoAjuda").style.display = "block";

			for (var i = 0; i < informacoesEquipes.length; i++) {
				informacoesEquipes[i][0].style.display = "block";
			}
		}, 501);
	}
}

botaoCentralizar.querySelector("input").onclick = function() {
	tabuleiro.style.top = "0px";
	tabuleiro.style.left = "0px";
	tabuleiro.style.transition = "all 0.2s linear";

	window.setTimeout(function() {
		tabuleiro.style.transition = "";
	}, 501);
}

botaoCentralizar.querySelector("input").onmouseover = function() {
	this.style.cursor = "pointer";
	this.style.border = "2px solid #283891";
	this.style.borderTop = "none";

	botaoCentralizar.style.height = "50px";
	botaoCentralizar.style.marginTop = "0px";
}

botaoCentralizar.querySelector("input").onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "2px solid #f3efe2";
	this.style.borderTop = "none";

	botaoCentralizar.style.height = "33px";
}