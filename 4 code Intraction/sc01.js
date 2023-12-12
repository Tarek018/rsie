var canvasWidth=900;
var canvasHeight=600;
var BlockSize=40; 

var xxx=10;
var yyy=10;


var cv;
var ctx;

 cv = document.getElementById("mycanvas"); // On demande au document de créer le canvas
            cv.width = canvasWidth; // Largeur du canvas (6px mentionnés � la variable ligne 5)
            cv.height = canvasHeight;


  ctx = cv.getContext("2d");


draw();

function draw()
{
	ctx.clearRect(0,0, canvasWidth, canvasHeight);
	ctx.fillRect(xxx,yyy,BlockSize,BlockSize);

	console.log(xxx,yyy);

setTimeout(draw,100);
}


document.onkeydown = function handleKeyDown(e) {
    var key = e.keyCode; 
 
    switch (key) {
        case 37:
            xxx = xxx- BlockSize;
			if (xxx<0)xxx=0; 
			
            break;
        case 38:
            yyy = yyy- BlockSize;
			if (yyy<0)yyy=0;
            break;
        case 39:
           xxx = xxx+BlockSize;
            break;
        case 40:
           yyy = yyy+ BlockSize;
            break;
        default:
            return;
    }

 };