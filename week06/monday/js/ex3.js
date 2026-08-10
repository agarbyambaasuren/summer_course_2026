function drawBall(){
    createCanvas(600,600)
}
function draw(){
    background("#f5f5f5");
    drawBall(50,50);
    drawBall(250,150);
    drawBall(150,300);
}
function drawBall (x,y){
    fill("#ff0000ff")
    circle(x,y,70)
}