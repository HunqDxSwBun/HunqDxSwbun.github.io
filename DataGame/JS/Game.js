

var myGamePiece;
var SwBun;

function startGame() {
    myGamePiece = new component(120, 160, "./DataGame/IMG/Figure/HunqD/HunqD1.png", 10, 420, "image");
    SwBun = new component(120, 160, "./DataGame/IMG/Figure/SwBun/SwBun1.PNG", 80, 420, "image");

    Game.start();
}

var Game = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = $(window).width();
        this.canvas.height = $(window).height();
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = Game.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
                
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;     
           
    }

}

function updateGameArea() {
    Game.clear();
    myGamePiece.newPos();
    myGamePiece.update();
    SwBun.newPos();
    SwBun.update();
}

function moveup() {
    if (myGamePiece.y >= 420) {
        myGamePiece.speedY = -1; 
       
    } else {
        myGamePiece.speedY = 0; 
        myGamePiece.y = 420;
    }
}

function movedown() {
    if (myGamePiece.y <= 500) {
        myGamePiece.speedY = 1; 
    } else {
        myGamePiece.speedY = 0;
        myGamePiece.y = 500;
    }
    console.log(myGamePiece.y)
   
}

function moveleft() {
    if (myGamePiece.x > -110) {
        myGamePiece.speedX = -1; 
    } else {
        myGamePiece.speedX = 0;
        myGamePiece.x = -110;
    }
    console.log(myGamePiece.x)
}

function moveright() {
    if (myGamePiece.x < 340) {
        myGamePiece.speedX = 1; 
    } else {
        myGamePiece.speedX = 0;
        myGamePiece.x = 340;
    }
    console.log(myGamePiece.x)
}
// SwBun

function moveup2() {
    if (SwBun.y >= 420) {
        SwBun.speedY = -1; 
       
    } else {
        SwBun.speedY = 0; 
        SwBun.y = 420;
    }
}

function movedown2() {
    if (SwBun.y <= 500) {
        SwBun.speedY = 1; 
    } else {
        SwBun.speedY = 0;
        SwBun.y = 500;
    }
    console.log(SwBun.y)
   
}

function moveleft2() {
    if (SwBun.x > -110) {
        SwBun.speedX = -1; 
    } else {
        SwBun.speedX = 0;
        SwBun.x = -110;
    }
    console.log(SwBun.x)
}

function moveright2() {
    if (SwBun.x < 350) {
        SwBun.speedX = 1; 
    } else {
        SwBun.speedX = 0;
        SwBun.x = 350;
    }
    console.log(SwBun.x)

    
}


function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
    SwBun.speedX = 0; 
    SwBun.speedY = 0; 
}
