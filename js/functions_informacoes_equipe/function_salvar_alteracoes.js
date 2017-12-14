var botaoSalvar = document.getElementById("botaoSalvar").querySelector("input");

botaoSalvar.onclick = function() {
	var figuresPopup = document.getElementById("containerInformacoesEquipe").querySelectorAll("figure");
	var labels = document.getElementById("containerCadastrarEquipe").querySelectorAll("label");
	var nomeEquipe = document.getElementById("nome_equipe").querySelector("input");
	var textAltEquipe = window.localStorage.getItem("idEquipeCadastrandoAgora").split(" ");
	var id = textAltEquipe[1];
	var imgEquipe;

	if (nomeEquipe.value != "" && nomeEquipe.value.length > 5 && nomeEquipe.value.length < 16) {
		var nomeIgual = false;
		for (var i = labels.length - 1; i >= 0; i--) {
			if (i != (id-1)) {
				if (window.getComputedStyle(labels[i]).display == "none") {
					if (labels[i].innerText == nomeEquipe.value) {
						alert("O nome da equipe escolhido já está sendo usado por outra equipe." +
							 " Por favor, escolha outro nome.");
						nomeIgual = true;
						nomeEquipe.focus();
						break;
					}
				}
			}
		}

		if (!nomeIgual) {
			var caminhoImagem = false;

			for (var i = 0; i < figuresPopup.length; i++) {
				if (figuresPopup[i].querySelector("img").style.border == "2px solid rgb(40, 56, 145)") {
					caminhoImagem = true;
					imgEquipe = figuresPopup[i].querySelector("img").getAttribute("src");
					window.localStorage.setItem("idPopup", i);
					window.localStorage.setItem("displayPopup", "none");
					break;
				}
			}

			if (caminhoImagem) {
				window.localStorage.setItem("nomeEquipe" + id, nomeEquipe.value);
				window.localStorage.setItem("imgEquipe" + id, imgEquipe);
				window.localStorage.setItem("id" + id, id);

				document.getElementById("fundoPopup").style.display = "none";
				document.getElementById("popup").style.display = "none";
				document.getElementById("nome_equipe").querySelector("input").value = "";

				document.querySelector("body").style.opacity = "0";
				window.setTimeout(function() {
					location.reload();
				}, 301);
			}
			else {
				alert("Selecione uma imagem para representar sua equipe, por favor.");
			}
		}	
	}
	else {
		alert("Digite um nome que tenha no mínimo 5 caracteres e no máximo 15 caracteres para representar sua equipe");
	}
}