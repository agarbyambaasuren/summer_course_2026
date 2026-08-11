function setup(){
    createCanvas(400,400)
}

function draw(){
   drawBall(50,100,30)
   drawBall(250,300,100)
   drawBall(100,250,150)
}
 function drawBall(x,y,size){
    circle(x,y,size)
 }