var nEquipes = window.localStorage.getItem("nEquipes");

var divs = document.getElementById("casasTabuleiro").querySelectorAll("div");
var figures = document.getElementById("casasTabuleiro").querySelectorAll("figure");

var primeiraEquipeJogandoAgora = document.getElementById("primeiraEquipeJogandoAgora");
var segundaEquipeJogandoAgora = document.getElementById("segundaEquipeJogandoAgora");
var terceiraEquipeJogandoAgora = document.getElementById("terceiraEquipeJogandoAgora");
var quartaEquipeJogandoAgora = document.getElementById("quartaEquipeJogandoAgora");

var fila = [primeiraEquipeJogandoAgora, segundaEquipeJogandoAgora, terceiraEquipeJogandoAgora, quartaEquipeJogandoAgora]

for (var i = (figures.length - 1); i >= nEquipes; i--) {
	figures[i].style.display = "none";
}

for (var i = 0; i < nEquipes; i++) {
	if (figures[i].id == "") {
		figures[i].id = "pino" + (i+1);
		figures[i].setAttribute("name", window.localStorage.getItem("nomeEquipeOrdenado" + (i+1)));
	}
}

for (var i = 0; i < nEquipes; i++) {
	figures[i].querySelector("img").src = fila[i].querySelector("img").getAttribute("src");
}

if (nEquipes == 2) {
	figures[0].style.marginLeft = "0px";
	figures[0].style.marginTop = "69px";

	figures[1].style.marginLeft = "74px";
	figures[1].style.marginTop = "130px";
}
else if (nEquipes == 3) {
	figures[0].style.marginLeft = "0px";
	figures[0].style.marginTop = "69px";

	figures[1].style.marginLeft = "74px";
	figures[1].style.marginTop = "69px";

	figures[2].style.marginLeft = "37px";
	figures[2].style.marginTop = "130px";
}
else if (nEquipes == 4) {
	figures[0].style.marginLeft = "0px";
	figures[0].style.marginTop = "69px";

	figures[1].style.marginLeft = "74px";
	figures[1].style.marginTop = "69px";

	figures[2].style.marginLeft = "0px";
	figures[2].style.marginTop = "130px";

	figures[3].style.marginLeft = "74px";
	figures[3].style.marginTop = "130px";
}