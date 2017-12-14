var box = document.querySelector(".container").children[0];
var panelClassName = 'mostrar-frente';
var classes = ['mostrar-frente', 'mostrar-costa', 'mostrar-direita', 'mostrar-esquerda', 'mostrar-cima', 'mostrar-baixo'];
var equipeJogandoAgora;
var posicao;

window.setInterval(function() {
    equipeJogandoAgora = window.localStorage.getItem("equipeJogandoAgora");
}, 100);

var animacaoDadoAdd = window.setInterval(function() {
    document.querySelector(".container").classList.add('animacaoDado');
}, 5000);

var animacaoDadoRemove = window.setInterval(function() {
    document.querySelector(".container").classList.remove('animacaoDado');
}, 6001);

box.onclick = function() {
    document.querySelector(".container").classList.remove('animacaoDado');
    clearInterval(animacaoDadoAdd);
    clearInterval(animacaoDadoRemove);
	girarDado();
	box.onclick = null;
}

box.onmouseover = function() {
    box.style.cursor = "pointer";
    box.setAttribute("title", "Clique para girar o dado");
}

box.onmouseout = function() {
  box.style.cursor = "default";
  box.removeAttribute("title");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

function girarDado() {
    var intervalo = window.setInterval(function() {
        var mostrador = getRandomInt(-1, 5);

        panelClassName = classes[mostrador];
        box.removeAttribute("class");
        box.setAttribute("class", panelClassName);
    }, 201);

    window.setTimeout(function() {
        clearInterval(intervalo);
    }, 2000);

    window.setTimeout(function() {
        var mostrador = Math.round(Math.random()*99);

        if (mostrador <= 39) {
            panelClassName = classes[0];
        }
        else if (mostrador <= 59) {
            panelClassName = classes[1];
        }
        else if (mostrador <= 79) {
            panelClassName = classes[2];
        }
        else if (mostrador <= 89) {
            panelClassName = classes[3];
        }
        else if (mostrador <= 95) {
            panelClassName = classes[4];
        }
        else if (mostrador <= 99) {
            panelClassName = classes[5];
        }

        box.removeAttribute("class");
        box.setAttribute("class", panelClassName);

        posicao = panelClassName.split("-");
    }, 2001);

    window.setTimeout(function() {
        var indice;
        for (var i = 0; i < box.querySelectorAll("figure").length; i++) {
            if (box.querySelectorAll("figure")[i].getAttribute("class") == posicao[1]) {
                indice = i
            }
        }
        abrirPopupPergunta(box.querySelectorAll("figure")[indice].getAttribute("title"), equipeJogandoAgora);
    }, 2501);
}