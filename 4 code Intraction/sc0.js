var canvasWidth=900;
var canvasHeight=600;
var BlockSize=30; 


var canvas;
var ctx;
var serp;


init();

function init() {


  canvas = document.getElementById("mycanvas"); // On demande au document de créer le canvas
            canvas.width = canvasWidth; // Largeur du canvas (6px mentionnés � la variable ligne 5)
            canvas.height = canvasHeight;


  ctx = canvas.getContext("2d");

    serp = new serpent([[6, 4], [5, 4], [4, 4]], "right");

    refeshCanvas();

}


function refeshCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    serp.advance();
  
    serp.draw();
   
     setTimeout(refeshCanvas, 500);
   
     
}

function drawBlock(x,y, color)
{
    ctx.save();
ctx.fillStyle=color;
    ctx.fillRect(x * BlockSize, y * BlockSize, BlockSize, BlockSize);
    ctx.restore();  
}


function serpent(body, direction)
{
    this.body = body;
    this.direction = direction;

    this.draw = function ()
    {
        this.body.forEach(function (item)
        {
            drawBlock(item[0], item[1], "red");
        });
    }

    this.advance = function()
    {
        var position = this.body[0].slice();

        switch (this.direction) {
            case "left":
                position[0] -= 1;
                break;
            case "right":
                position[0] += 1;
                break;
            case "up":
                position[1] -= 1;
                break;

            case "down":
                position[1] += 1;
                break;
            default:
                throw(" invalid direction");

        };
        this.body.unshift(position);
      this.body.pop();

       
    }

    this.setDirection = function (newDirection)
    {
        var validDirection;

        switch (this.direction) {
                case "left":
                case "right":
                     validDirection =["up","down"] ;
                    break;
                case "up":
               case "down":
                     validDirection = ["left", "right"];
                break;
            default:
                throw (" invalid direction");
        }

        if (validDirection.indexOf(newDirection) > -1) {
            this.direction = newDirection;
        }
    }


}



document.onkeydown = function handleKeyDown(e) {
    var key = e.keyCode; 
    var newDirection;

    
    switch (key) {
        case 37:
            newDirection = "left";
            break;
        case 38:
            newDirection = "up";
            break;
        case 39:
            newDirection = "right";
            break;
        case 40:
            newDirection = "down";
            break;
        default:
            return;
    }

    serp.setDirection(newDirection);
};