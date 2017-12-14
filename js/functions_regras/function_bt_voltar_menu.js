var btVoltar = document.getElementById("botaoVoltar").querySelector("input");
var iconeBotaoVoltar = document.getElementById("iconeBotaoVoltar");

btVoltar.onclick = function() {
	voltarMenu();
}

iconeBotaoVoltar.onclick = function() {
	voltarMenu();
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

function voltarMenu() {
	document.querySelector("body").style.opacity = "0";
	window.setTimeout(function() {
		window.location = "../index.html";
	}, 301);	
}