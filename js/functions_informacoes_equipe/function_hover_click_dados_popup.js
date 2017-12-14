var figuresPopup = document.getElementById("containerInformacoesEquipe").querySelectorAll("figure");
var botaoRetornar = document.getElementById("botaoRetornar").querySelector("input");
var botaoSalvar = document.getElementById("botaoSalvar").querySelector("input");

for (var i = 0; i < figuresPopup.length; i++) {
	if (figuresPopup[i].id == "icone" + (i+1)) {
		figuresPopup[i].onmouseover = function() {
			this.style.border = "2px solid #283891";
			this.style.cursor = "pointer";
		}

		figuresPopup[i].onmouseout = function() {
			this.style.border = "2px solid #eaab3b";
			this.style.cursor = "default";
		}

		figuresPopup[i].onclick = function() {
			for (var i = 0; i < figuresPopup.length; i++) {
				if (figuresPopup[i].querySelector("img").style.border == "2px solid rgb(40, 56, 145)") {
					figuresPopup[i].querySelector("img").style.width = "100%";
					figuresPopup[i].querySelector("img").style.height = "100%";
					figuresPopup[i].querySelector("img").style.border = "none";
					break;
				}
			}

			for (var i = 0; i < figuresPopup.length; i++) {
				if (document.getElementById("nome_equipe").querySelector("input").value == "" ||
					document.getElementById("nome_equipe").querySelector("input").value == 
					"Equipe " + figuresPopup[i].querySelector("img").getAttribute("alt")) {

					document.getElementById("nome_equipe").querySelector("input").value = "Equipe " + 
					this.querySelector("img").getAttribute("alt");
				}
			}
			this.querySelector("img").style.width = "97%";
			this.querySelector("img").style.height = "96%";
			this.querySelector("img").style.border = "2px solid #283891";
			this.querySelector("img").style.borderRadius = "20px";
		}
	}
}
// FUNÇÕES HOVER E OUT DO BOTÃO RETORNAR
botaoRetornar.onmouseover = function() {
	this.style.cursor = "pointer";
	this.style.border = "4px solid #283891"
	this.style.transform = "rotate(-4deg)"
}

botaoRetornar.onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "4px solid #eaab3b"
	this.style.transform = "rotate(0deg)"
}
// FUNÇÕES HOVER E OUT DO BOTÃO SALVAR
botaoSalvar.onmouseover = function() {
	this.style.cursor = "pointer";
	this.style.border = "4px solid #283891"
	this.style.transform = "rotate(4deg)"
}

botaoSalvar.onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "4px solid #eaab3b"
	this.style.transform = "rotate(0deg)"
}