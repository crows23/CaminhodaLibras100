var nomeEquipeVencedora = document.getElementById("containerInformacoesEquipeGanhadora").querySelector("h1")
var pontosEquipeVencedora = document.getElementById("containerInformacoesEquipeGanhadora").querySelector("h2")
var nomeEquipes = document.getElementById("nomeEquipes").querySelectorAll("p");
var pontosEquipes = document.getElementById("pontos").querySelectorAll("p");
var botaoJogarNovamente = document.getElementById("jogarNovamente");
var botaoRecadastrar = document.getElementById("recadastrarEquipes");
var botaoVoltarMenu = document.getElementById("voltarMenuInicial");
var nEquipes = window.localStorage.getItem("nEquipes");

for (var i = nomeEquipes.length - 1; i >= nEquipes; i--) {
	nomeEquipes[i].style.display = "none";
	pontosEquipes[i].style.display = "none";
}

for (var i = 0; i < nEquipes; i++) {
	nomeEquipes[i].innerText = window.localStorage.getItem("nomeEquipe"+(i+1)+"lugar");
	pontosEquipes[i].innerText = window.localStorage.getItem("pontosEquipe"+(i+1)+"lugar");
}

var nomeSeparado = nomeEquipes[0].innerText.split("-");

pontosEquipeVencedora.innerText = "Total de " + pontosEquipes[0].innerText + " pontos";
nomeEquipeVencedora.innerText = nomeSeparado[1] + " Ganhou!!!";

botaoJogarNovamente.onmouseover = function() {
	this.style.cursor = "pointer";
	this.style.border = "4px solid #283891";
	this.style.transform = "rotate(4deg)";
}

botaoRecadastrar.onmouseover = function() {
	this.style.cursor = "pointer";
	this.style.border = "4px solid #283891";
	this.style.transform = "rotate(4deg)";
}

botaoVoltarMenu.onmouseover = function() {
	this.style.cursor = "pointer";
	this.style.border = "4px solid #283891";
	this.style.transform = "rotate(4deg)";
}

botaoJogarNovamente.onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "4px solid #eaab3b";
	this.style.transform = "rotate(0deg)";
}

botaoRecadastrar.onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "4px solid #eaab3b";
	this.style.transform = "rotate(0deg)";
}

botaoVoltarMenu.onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "4px solid #eaab3b";
	this.style.transform = "rotate(0deg)";
}

botaoJogarNovamente.onclick = function() {
	window.localStorage.setItem("equipeJogandoAgora", 1);
	document.querySelector("body").style.opacity = "0";
	window.setTimeout(function() {
		window.location = "tabuleiro.html";
	}, 301);
}

botaoRecadastrar.onclick = function() {
	window.localStorage.clear();
	document.querySelector("body").style.opacity = "0";
	window.setTimeout(function() {
		window.location = "adicionar_informacoes_equipe.html";
	}, 301);
}

botaoVoltarMenu.onclick = function() {
	window.localStorage.clear();
	document.querySelector("body").style.opacity = "0";
	window.setTimeout(function() {
		window.location = "../index.html";
	}, 301);
}