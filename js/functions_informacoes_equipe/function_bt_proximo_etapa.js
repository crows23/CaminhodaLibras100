var figures = document.getElementById("containerCadastrarEquipe").querySelectorAll("figure");
var labels = document.getElementById("containerCadastrarEquipe").querySelectorAll("label");
var btProximo = document.getElementById("botaoProximo").querySelector("input");
var iconeBotaoAvancar = document.getElementById("iconeBotaoProximo");

var campoVazio = false;
var quantidadeFiguresDisplayBlock = 0;

for (var i = 0; i < figures.length; i++) {
	if (figures[i].id == "img_equipe" + (i+1)) {
		if (window.getComputedStyle(figures[i]).display == "block") {
			quantidadeFiguresDisplayBlock++;
		}
	}
}

for (var i = 0; i < quantidadeFiguresDisplayBlock; i++) {
	if (figures[i].id == "img_equipe" + (i+1)) {
		if (figures[i].querySelector("img").getAttribute("src") == "" || labels[i].innerText == "Equipe " + (i+1)) {
			campoVazio = true;
			break;
		}
	}
}

if (!campoVazio) {
	btProximo.disabled = false;
	btProximo.style.color = "rgba(40, 56, 145, 1)";

	btProximo.onclick = function() {
		prosseguirOpcoes();
	}

	iconeBotaoAvancar.onclick = function() {
		prosseguirOpcoes();
	}
	// FUNÇÕES MOUSE OVER E MOUSE OUT DO BOTÃO AVANÇAR
	btProximo.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
		this.style.borderLeft = "none";

		iconeBotaoAvancar.style.border = "4px solid #283891";
	}

	btProximo.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "4px solid #f3efe2";
		this.style.borderLeft = "none";

		iconeBotaoAvancar.style.border = "4px solid #f3efe2";
	}
	// FUNÇÕES MOUSE OVER E MOUSE OUT DO ÍCONE DO BOTÃO AVANÇAR
	iconeBotaoAvancar.onmouseover = function() {
		this.style.border = "4px solid #283891";
		this.style.cursor = "pointer";

		btProximo.style.border = "4px solid #283891";
		btProximo.style.borderLeft = "none";
	}

	iconeBotaoAvancar.onmouseout = function() {
		this.style.border = "4px solid #f3efe2";
		this.style.cursor = "default";

		btProximo.style.border = "4px solid #f3efe2";
		btProximo.style.borderLeft = "none";
	}
}

function prosseguirOpcoes() {
	var informacoesEquipes = []

	for (var i = 0; i < quantidadeFiguresDisplayBlock; i++) {
		window.localStorage.setItem("caminhoImagemEquipe" + (i+1), figures[i].querySelector("img").getAttribute("src"));
		window.localStorage.setItem("nomeEquipe" + (i+1), labels[i].innerText);
	}

	window.localStorage.setItem("nEquipes", quantidadeFiguresDisplayBlock);
	window.localStorage.setItem("equipesFormadas", true);
	document.querySelector("body").style.opacity = "0";
	window.setTimeout(function() {
		window.location = "opcoes.html";
	}, 301);	
}