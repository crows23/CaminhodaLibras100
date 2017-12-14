var scrollSpeed = 300;//variavel da velocidade, quanto maior mais lento
	
// set the default position
var currentx = 0;
var currenty = 0;

// set the direction
var direction = 'diagonal';

function bgscroll() {
	// 1 pixel row at a time
    currentx += 1;
    currenty += 1;

    // move the background with backgrond-position css properties
    $('#tela_principal').css("backgroundPosition", (direction == 'diagonal') ? currentx+"px "+currenty+"px" : "0 " + current+"px");

    if(currenty > 400){
    	currentx = 0;
    	currenty = 0
    }
}
//Calls the scrolling function repeatedly
 setInterval("bgscroll()", scrollSpeed);	
	