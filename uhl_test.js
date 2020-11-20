let canvas = document.getElementById("testCanvas");
var ctx  = canvas.getContext("2d");
setInterval(update, 1);

class sprite{
    constructor(x, y, w, h, dx, dy, moveSpeed, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dx = dx;
        this.dy = dy;
        this.moveSpeed = moveSpeed;
        this.color = color;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }
    update(){
        this.x+=this.dx;
        this.y+=this.dy;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x, this.y, 50, 50);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.rect(this.x, this.y, 50, 50);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
    }
    moveFree(canvas){
        if(this.x < 0 || this.x > canvas.width-this.w)
        this.dx=-this.dx;
        if(this.y < 0 || this.y > canvas.height-this.h)
        this.dy=-this.dy;
    }
    moveKey(canvas){
        if(this.up) this.dy = -this.moveSpeed;
        else if(this.down) this.dy = this.moveSpeed;
        else this.dy = 0;
        if(this.left) this.dx = -this.moveSpeed;
        else if(this.right) this.dx = this.moveSpeed;
        else this.dx = 0;

        if(this.x < -this.w)
            this.x = canvas.width;
        if(this.x > canvas.width)
            this.x = -this.w;
        if(this.y < -this.h)
            this.y = canvas.height;
        if(this.y > canvas.height)
            this.y = -this.h;
    }
    keyPressed(key){ //for objects that move with a key press
        if (key == 37) {
            this.left = true;
        }else if (key == 39) {
            this.right = true;
        }else if (key == 38) {
            this.up = true;
        }else if (key == 40) {
            this.down = true;
        }
    }
    keyReleased(key){ //for objects that move with a key press
        if (key == 37) {
            this.left = false;
        }else if (key == 39) {
            this.right = false;
        }else if (key == 38) {
            this.up = false;
        }else if (key == 40) {
            this.down = false;
        }
    }
    
}