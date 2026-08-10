function setup(){
    createCanvas(400,400);
}
function draw(){
    background("#a4e0f071")
    circle(50,50,80,fill("rgba(0, 255, 0, 0.4)"));
    sayHello();
    drawBall(130,130,fill("#456789"));
    drawBall(190,190,fill("#123456"));
    drawBall(250,250,fill("#ffbf00ff"));
    drawBall(310,310,fill("#e1ff00ff"));
    drawBall(370,370,fill("#ff0000ff"));
    drawBall(370,0,'#ca2b2b')
     drawBall(370,60,fill("#ff009dff"));
    drawBall(320,120,fill("#00ff08ff"));
    drawBall(270,180,fill("#ea00ffff"));
    drawBall(220,240,fill("#00ffbfff"));
    drawBall(170,300,fill("#6a00ffff"));
}

 function sayHello(){
    console.log('Hello');
 }
 function drawBall(x,y){
    circle(x,y,50)
 }