var nEquipes = window.localStorage.getItem("nEquipes");
var figures = document.getElementById("containerOrdemEquipes").querySelectorAll("figure");
var labels = document.getElementById("containerOrdemEquipes").querySelectorAll("label");

for (var i = figures.length - 1; i >= nEquipes; i--) {
	figures[i].style.display = "none";
	labels[i].style.display = "none";
}

switch(nEquipes) {
	case "2":
		figures[0].style.display = "block";
		figures[0].style.marginLeft = "420px";

		labels[0].style.marginTop = "115px";
		labels[0].style.marginLeft = "340px";

		figures[1].style.marginLeft = "420px";
		figures[1].style.marginTop = "255px";
		figures[1].style.borderRadius = "15px 15px 100px 100px/15px 15px 30px 30px";
		figures[1].style.lineHeight = "50px";

		labels[1].style.marginTop = "295px";
		labels[1].style.marginLeft = "340px";
		break;

	case "3":
		figures[0].style.marginLeft = "200px";

		labels[0].style.marginTop = "115px";
		labels[0].style.marginLeft = "120px";

		figures[1].style.marginLeft = "560px";
		figures[1].style.lineHeight = "250px";

		labels[1].style.marginTop = "115px";
		labels[1].style.marginLeft = "480px";

		figures[2].style.marginLeft = "378px";
		figures[2].style.lineHeight = "50px";

		labels[2].style.marginTop = "295px";
		labels[2].style.marginLeft = "298px";
		break;
}