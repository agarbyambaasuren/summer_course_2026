let circleX;
let circleY;
let circleSize=80;
let circleColor="#3498DB";
function setup(){
    createCanvas(600,400)
     background("#D3D3D3")
}
function draw(){
    circle(circleX,circleY,circleSize)
    fill(circleColor)
}
function mousePressed(){
    let circleX=mouseX;
    let circleY=mouseY
}