var btProximo = document.getElementById("botaoProximo").querySelector("input");
var iconeBotaoAvancar = document.getElementById("iconeBotaoProximo");

btProximo.onclick = function() {
	prosseguirCadastroEquipes();
}

iconeBotaoAvancar.onclick = function() {
	prosseguirCadastroEquipes();
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

function prosseguirCadastroEquipes() {
	window.localStorage.clear();
	document.querySelector("body").style.opacity = "0";
	window.setTimeout(function() {
		window.location = "adicionar_informacoes_equipe.html";
	}, 301);
}