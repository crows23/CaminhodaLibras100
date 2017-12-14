var figures = document.getElementById("containerCadastrarEquipe").querySelectorAll("figure");
var divs = document.getElementById("containerCadastrarEquipe").querySelectorAll("div");
var labels = document.getElementById("containerCadastrarEquipe").querySelectorAll("label");
var background = document.getElementById("fundoPopup");
var popup = document.getElementById("popup");

var figuresCadastroEquipe = [];
var figuresIds = [];

for (var i = 0; i < figures.length; i++) {
	if (figures[i].id == "img_equipe" + (i+1)) {
		figuresCadastroEquipe.push(figures[i]);
	}
}

for (var i = 0; i < figures.length; i++) {
	figuresIds.push(figures[i].id);
}

for (var i = 0; i < figures.length; i++) {
	if (figures[i].id == figuresIds[i]) {
		figures[i].onmouseover = function() {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #283891";
			
			if (this.id == "img_equipe1" || this.id == "img_equipe2") {
				if (window.getComputedStyle(this).marginTop == "255px") {
					this.style.lineHeight = "50px";
				}
				else {
					this.style.lineHeight = "250px";
				}
			}
			else if (this.id == "img_equipe3" || this.id == "img_equipe4") {
				this.style.lineHeight = "50px";
			}
		}

		figures[i].onmouseout = function() {
			this.style.cursor = "default";
			this.style.border = "4px solid #E9A93F";
			
			if (this.id == "img_equipe1" || this.id == "img_equipe2") {
				if (window.getComputedStyle(this).marginTop == "255px") {
					this.style.lineHeight = "50px";
				}
				else {
					this.style.lineHeight = "250px";
				}
			}

			else if (this.id == "img_equipe3" || this.id == "img_equipe4") {
				this.style.lineHeight = "50px";
			}
		}

		figures[i].onclick = function() {
			window.localStorage.setItem("idEquipeCadastrandoAgora", this.querySelector("img").alt)
			for (var i = 0; i < figuresIds.length; i++) {
				if (i < 4) {
					var figuresPopup = document.getElementById("containerInformacoesEquipe").querySelectorAll("figure");
					if (this.valueOf().id == figuresIds[i]) {
						if (this.valueOf().querySelector("img").getAttribute("src") != "") {
							for (var j = 0; j < figuresPopup.length; j++) {
								if (this.valueOf().querySelector("img").getAttribute("src") == 
									figuresPopup[j].querySelector("img").getAttribute("src")) {
									document.getElementById("nome_equipe").querySelector("input").value = labels[i].innerText;

									figuresPopup[j].style.display = "inline-block";
									figuresPopup[j].querySelector("img").style.border = "2px solid #283891";
									figuresPopup[j].querySelector("img").style.borderRadius = "20px";
									figuresPopup[j].querySelector("img").style.width = "98%";
									figuresPopup[j].querySelector("img").style.height = "96%";

									window.localStorage.setItem("popupMudou", "inline-block");
									window.localStorage.setItem("idPopup", j);
									break;
								}
							}
						}
						else {
							for (var j = 0; j < figuresIds.length; j++) {
								for (var k = 0; k < figuresPopup.length; k++) {
									if (figures[j].querySelector("img").getAttribute("src") == 
										figuresPopup[k].querySelector("img").getAttribute("src")) {
										figuresPopup[k].style.display = "none";

										window.localStorage.setItem("popupMudou", "none");
										window.localStorage.setItem("idPopup", k);
										break;
									}
								}
							}
							document.getElementById("nome_equipe").querySelector("input").value = "";
						}

						organizar_numero_icones_mostrados();

						popup.style.display = "block";
						background.style.display = "block";
					}
				}
			}
		}
	}
}

for (var i = 0; i < divs.length; i++) {
	divs[i].onmouseover = function() {
		this.style.transform = "rotate(4deg)"
		if (this.id == "img_addEquipe") {
			this.querySelector("input").style.cursor = "pointer";
			this.querySelector("input").style.border = "4px solid #283891";
		}
		else {
			this.querySelector("input").style.cursor = "pointer";
			this.querySelector("input").style.backgroundColor = "#283891";
			this.querySelector("input").style.color = "#f3efe2";
		}
	}

	divs[i].onmouseout = function() {
		this.style.transform = "rotate(0deg)"
		if (this.id == "img_addEquipe") {
			this.querySelector("input").style.cursor = "default";
			this.querySelector("input").style.border = "4px solid #E9A93F";
		}
		else {
			this.querySelector("input").style.cursor = "pointer";
			this.querySelector("input").style.backgroundColor = "#f3efe2";
			this.querySelector("input").style.color = "#283891";
		}
	}

	divs[i].onclick = function() {
		if (this.id == "img_addEquipe") {
			for (var j = 0; j < figuresCadastroEquipe.length; j++) {
				if (window.getComputedStyle(figuresCadastroEquipe[j]).display == "none") {
					window.localStorage.setItem("equipe" + (j+1), "block");
					break;
				}
			}
		}
		else {
			for (var j = figuresCadastroEquipe.length-1; j >= 2; j--) {
				if (window.getComputedStyle(figuresCadastroEquipe[j]).display == "block") {
					window.localStorage.setItem("equipe" + (j+1), "none");
					window.localStorage.setItem("nomeEquipe" + (j+1), "");
					window.localStorage.setItem("imgEquipe" + (j+1), "");
					window.localStorage.setItem("id" + (j+1), "");
					break;
				}
			}
		}
		document.querySelector("body").style.opacity = "0";
		window.setTimeout(function() {
			location.reload();
		}, 301);
	}
}