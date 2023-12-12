 cv = document.getElementById("mycanvas"); 
            cv.width = 900; // Largeur du canvas 
            cv.height = 600; // hauteur du canvas 


  ctx = cv.getContext("2d");   // trouver le contenu
  ctx.fillStyle = "red";
x=5;
y=10;

dir=1;    
 refesh();

function refesh() {
	ctx.clearRect(0 ,0 , 900, 600);
   ctx.fillRect(x , y, 10, 10);
if (y>=100) dir=0;
if (y<=10)dir=1;
if (dir===1) y+=15;
else y-=15;
   
  x+=5;

   setTimeout(refesh, 100);
}  
