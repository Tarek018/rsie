var cv = document.getElementById('mycanvas');
var ctx=cv.getContext('2d');
ctx.beginPath();
ctx.lineWidth = "1";
ctx.strokeStyle = "green";  

var degrade = ctx.createRadialGradient(45,45,10,52,50,30);  
degrade.addColorStop(0, '#A7D30C');  
degrade.addColorStop(0.9, '#019F62');  
degrade.addColorStop(1, 'rgba(1,159,98,0)');  // couleur transparente
		
ctx.fillStyle = degrade;  
ctx.fillRect(0,0,150,150); 


ctx.stroke();
