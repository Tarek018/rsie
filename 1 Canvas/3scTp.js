let isDrawing = false;
let x = 0;
let y = 0;


const BtnNon=-1;
const BtnSelect=0;
const BtnMove=1;

const BtnRect=2;

let SelBtn=BtnNon;

const NoOb=-1;
const ObRect=0;

let SelOb=NoOb;




const cv = document.getElementById('mCv');
            cv.width = 900; 
            cv.height = 600;
const context = cv.getContext('2d');

let Obj;


init();
    
    function init(){
        Obj = new Graphic([]);

		Obj.liste.pop();
		
        refreshCanvas();
    }
	
    function refreshCanvas(){
            context.clearRect(0,0,cv.width ,cv.height);
            Obj.draw();   
        	timeOut = setTimeout(refreshCanvas,100);
    }
   

    function Graphic(liste){
        this.liste = liste;

        this.draw = function(){
            context.save();

            for (var i=0 ; i < this.liste.length ; i++){
           	drawRect(context, this.liste[i][1], this.liste[i][2], this.liste[i][3], this.liste[i][4]);
            }
            context.restore();
        };
		
		this.AddRect = function(x1,y1,x2,y2){
			console.log('before insert'+this.liste.length);
		    this.liste.push([ObRect,x1,y1,x2,y2]);
			
			//this.liste.unshift([ObRect,x1,y1,x2,y2]);
			
			console.log('after insert'+this.liste.length);
		    
		}
		
		this.GetObject= function(x,y){
		  let m=-1;
				
		  for (var i=this.liste.length-1 ; i >=0 ; i--){
							
				if ((x>=this.liste[i][1])&& (x<=this.liste[i][1]+this.liste[i][3])&& 
								(y>=this.liste[i][2])&& (y<=this.liste[i][2]+this.liste[i][4]))  
				{   m=i;
			       console.log( i+ ', [ '+x +' , '+y+' ]');
					break;
				}
		    }	
			return m;	
			
		}
		
		this.Move= function(i,x,y ,dx,dy){
			this.liste[i][1]=x+dx;
			this.liste[i][2]=y+dy;
			}
			
		this.Del= function(i){
			console.log('before delete'+this.liste.length);
		    this.liste.splice(i, 1);
		
		//this.liste.pop();
			
			console.log('after delete'+this.liste.length);
		    
			}	
		
    }	
		
		
	
cv.onmousedown = function(e)
{
    if (SelBtn===BtnSelect)
	{
	SelOb=Obj.GetObject(e.clientX, e.clientY);
	}
	
    if (SelBtn===BtnRect)
    {
     x = e.clientX ;
     y = e.clientY ;
     isDrawing = true;
    } 

}


cv.onmouseup = function(e)
{
  if (isDrawing === true) {

     if (SelBtn===BtnRect)
	 {
      Obj.AddRect( x, y, e.clientX -x, e.clientY -y );
	 }
  }
  
 if (SelBtn===BtnMove)
	 {
       if (SelOb!=NoOb) Obj.Move( SelOb, x, y, e.clientX -x, e.clientY-y );
	 }

	 
    x = 0;
    y = 0;
    isDrawing = false;
	SelBtn=BtnNon;

}


cv.onmousemove = function(e)

{
	 if (SelBtn===BtnMove)
	 {
       if (SelOb!=NoOb) Obj.Move( SelOb, x, y, e.clientX , e.clientY );
	 }
 
}


function drawRect(ctx, x1, y1, x2, y2) {

  ctx.fillStyle = 'yellow';
  ctx.fillRect(x1, y1, x2, y2) ;

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.rect(x1, y1, x2, y2) ;
  ctx.closePath();
  ctx.stroke();
  
 }


function AddRect(){
SelBtn=BtnRect;
}

function SelectObj(){
SelBtn=BtnSelect;
}

function MoveObj(){
SelBtn=BtnMove;
}

function DelObj(){
 if (SelOb!=NoOb) Obj.Del( SelOb);
}