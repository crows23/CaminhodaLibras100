var nEquipes = window.localStorage.getItem("nEquipes");
var btVoltar = document.getElementById("botaoVoltar").querySelector("input");
var iconeBotaoVoltar = document.getElementById("iconeBotaoVoltar");

btVoltar.onclick = function() {
	voltarCadastroEquipes();
}

iconeBotaoVoltar.onclick = function() {
	voltarCadastroEquipes();
}
// FUNÇÕES MOUSE OVER E MOUSE OUT DO BOTÃO VOLTAR
btVoltar.onmouseover = function() {
	this.style.cursor = "pointer";
	this.style.border = "4px solid #283891";
	this.style.borderRight = "none";

	iconeBotaoVoltar.style.border = "4px solid #283891";
}

btVoltar.onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "4px solid #f3efe2";
	this.style.borderRight = "none";

	iconeBotaoVoltar.style.border = "4px solid #f3efe2";
}
// FUNÇÕES MOUSE OVER E MOUSE OUT DO ÍCONE DO BOTÃO VOLTAR
iconeBotaoVoltar.onmouseover = function() {
	this.style.border = "4px solid #283891";
	this.style.cursor = "pointer";

	btVoltar.style.border = "4px solid #283891";
	btVoltar.style.borderRight = "none";
}

iconeBotaoVoltar.onmouseout = function() {
	this.style.border = "4px solid #f3efe2";
	this.style.cursor = "default";

	btVoltar.style.border = "4px solid #f3efe2";
	btVoltar.style.borderRight = "none";
}

function voltarCadastroEquipes() {
	for (var i = 0; i < parseInt(nEquipes); i++) {
		window.localStorage.setItem("caminhoImagemOrdenado" + (i+1), null);
		window.localStorage.setItem("nomeEquipeOrdenado" + (i+1), null);
	}

	document.querySelector("body").style.opacity = "0";
	window.setTimeout(function() {
		window.location = "adicionar_informacoes_equipe.html";
	}, 301);
}