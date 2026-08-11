function setup(){
    createCanvas(600,400)
}
function draw(){
drawBall(50,50,50,255,0,0)
drawBall(50,110,50,0,255,0)
drawBall(150,150,100,0,0,255)
drawBall(300,200,50,255,255,0)
drawBall(400,100,100,255,0,255)
}
function drawBall(x,y,size,r,g,b){
    fill(r,g,b)
    circle(x,y,size) 
}