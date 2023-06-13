var canvas = new fabric.Canvas("myCanvas");

var BlockWH = 30;
var BlockHE = 30;
var playerX = 10;
var playerY = 10;

var playerObj = ""
function playerUpdate(){
    fabric.Image.fromURL("avatarRoblox.png", function(Img){
        playerObj = Img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(140);
        playerObj.set({
            top: playerY,
            left: playerX
         })
         canvas.add(playerObj);
    });
}

var BlockOBJ= ""
function newImage(getImg){
    fabric.Image.fromURL(getImg, function(Img){
        BlockOBJ = Img;
        BlockOBJ.scaleToWidth(BlockWH);
        BlockOBJ.scaleToHeight(BlockHE);
        BlockOBJ.set({
            top: playerY,
            left: playerX
         })
         canvas.add(BlockOBJ);
    });
}

window.addEventListener("keydown", myKeyDown)
function myKeyDown(e){
    keyPressed = e.keyCode;
    if(e.shiftKey==true && keyPressed=="80"){
        BlockWH = BlockWH + 7;
        BlockHE = BlockHE + 7; 
        document.getElementById("altrLG").innerHTML = BlockWH;
        document.getElementById("altrAL").innerHTML = BlockHE;
    }

    if(e.shiftKey==true && keyPressed=="75"){
        BlockWH = BlockWH - 7;
        BlockHE = BlockHE - 7; 
        document.getElementById("altrLG").innerHTML = BlockWH;
        document.getElementById("altrAL").innerHTML = BlockHE;
    }

    if(keyPressed=="38"){
        up()
    }

    if(keyPressed=="39"){
        right()
    }

    if(keyPressed=="40"){
        down()
    }

    if(keyPressed=="37"){
        left()
    }

    if(keyPressed=="71"){
        newImage("ground.png")
    }

    if(keyPressed=="84"){
        newImage("trunk.jpg")
    }

    if(keyPressed=="68"){
        newImage("dark_green.png")
    }

    if(keyPressed=="87"){
        newImage("wall.jpg")
    }

    if(keyPressed=="85"){
        newImage("unique.png")
    }

    if(keyPressed=="67"){
        newImage("cloud.jpg")
    }

    if(keyPressed=="76"){
        newImage("light_green.png")
    }

    if(keyPressed=="82"){
        newImage("roof.png")
    }

    if(keyPressed=="89"){
        newImage("yellow_wall.png")
    }
}

function up(){
    if(playerY >= 0){
        playerY = playerY - BlockHE
        canvas.remove(playerObj);
        playerUpdate()

    }
}

function down(){
    if(playerY <=560){
        playerY = playerY + BlockHE
        canvas.remove(playerObj);
        playerUpdate()

    }
}

function right(){
    if(playerX <= 1230 ){
        playerX = playerX + BlockWH
        canvas.remove(playerObj);
        playerUpdate()

    }
}

function left(){
    if(playerX >= 0 ){
        playerX = playerX - BlockWH
        canvas.remove(playerObj);
        playerUpdate()

    }
}