let circleX=300;
let circleY=200;
let circleColor="#3498db";
let circleSize=90;
function setup(){
    createCanvas(400,600)
}
function draw(){
    background("#ffff")
    fill(circleColor)
    circle(circleX,circleY,circleSize)
if(mouseX<width/2){background("#3498db")}
else{background("#ff0000ff")}
}
function mousePressed(){
    circleX=mouseX
    circleY=mouseY
}