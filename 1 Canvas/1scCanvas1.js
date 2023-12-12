var cv = document.getElementById('mycanvas');
var ctx=cv.getContext('2d');
ctx.beginPath();
ctx.lineWidth = "1";
ctx.strokeStyle = "green";  
		
ctx.moveTo(50,25);  
ctx.lineTo(300,250);  
ctx.closePath();

ctx.stroke();
