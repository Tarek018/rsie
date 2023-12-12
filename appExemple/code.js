
let liste=[];

let canvasWidth=1200;
let canvasHeight=600;
let x;
let y;

selected=-1;

init();

function init() {


  canvas = document.getElementById("mycanvas"); // On demande au document de créer le canvas
            canvas.width = canvasWidth; // Largeur du canvas (6px mentionnés � la variable ligne 5)
            canvas.height = canvasHeight;


  ctx = canvas.getContext("2d");


    refeshCanvas();

}

function Draw(){
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	ctx.fillStyle = "blue";

		liste.forEach(element => {
			ctx.fillRect(element[0],element[1],20,20);
			});

if (selected>=0) {
	ctx.fillStyle = "green";
	ctx.fillRect(liste[selected][0],liste[selected][1],20,20);
}

   ctx.font = "30px arial";
   ctx.fillStyle = "red";
   ctx.textAlign = "center";
   ctx.fillText("Nbr d'objet: "+liste.length, canvas.width/2, canvas.height/2);

	
}
function refeshCanvas() {
    
      Draw(); 
   
     setTimeout(refeshCanvas, 100);
   
     
}

 
document.onmousedown = function(e)
{
 
	console.log("test");
    
	console.log("Ajout objet");
	x = e.clientX ;
    y = e.clientY ;
     
	if (!e.ctrlKey)
	{
		AddRect(x,y);
     }
    else
	SelectObj(); 
 	
}

function SelectObj(){
 selected=-1;
 let ok=false;
 for (let i=0; i<liste.length; i++)
 {
	 ok= test(liste[i][0],20,20) && test(liste[i][0],20,20);
	 if (ok) {
		 selected=i;
	     break;
	 } 
 }
		  
}

function test(v, min, max){
    if ((v>=min)&&(v<=max)) {return true;}
	else {return false;}
}


AddRect = function(x,y){
			console.log('Ajout Rectangle');
		    liste.push([x,y]);
			console.log(liste.length);
}

