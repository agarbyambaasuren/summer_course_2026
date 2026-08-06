let circleX=300;
let circleY=200;
let circleSize=90;
let circleRed=255;
let circleGreen=100;
let circleBlue=50;
function setup(){
    createCanvas(400,400);
}
function mousePressed(){
    circleX=mouseX
    circleY=mouseY
}
function draw(){
    background("#f5f5f5")
    fill(circleRed,circleGreen,circleBlue)
    circle(circleX,circleY,circleSize)
}
