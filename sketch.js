var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
block1 = createSprite(0,580,360,30);
block1.shapeColor= rgb(0,0,255);

block2 = createSprite(295,580,200,30);
block2.shapeColor= rgb(255,128,0);

block3 = createSprite(515,580,360,30);
block3.shapeColor= rgb(153,0,76);

block4 = createSprite(740,580,220,30);
block4.shapeColor= rgb(0,100,0);

box = createSprite(random(20,750),100,40,40);
box.shapeColor = rgb(255,255,255);
box.velocityX=4; 
box.velocityY=7;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff (edges);
drawSprites();

    //add condition to check if box touching surface and make it box
if(block1.isTouching(box)&& box.bounceOff(block1)){
    box.shapeColor= rgb(0,0,255);
music.play();
}

if(block3.isTouching(box)&& box.bounceOff(block3)){
    box.shapeColor= rgb(153,0,76);
music.play();
}
if(block4.isTouching(box)&& box.bounceOff(block4)){
    box.shapeColor= rgb(0,100,0);
music.play();
}    
if(block2.isTouching(box)){
    box.shapeColor= rgb(255,128,0);
music.stop();
box.velocityX=0;
box.velocityY=0;
}











}



