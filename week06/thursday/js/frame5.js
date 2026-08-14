function setup(){
    createCanvas(400,400);
}

function draw(){
    background(220);
    let angle=sin(frameCount*2)*PI/4;
    let x=200+sin(angle)*150;
    let y=100+cos(angle)*150;

    line(200,100,x,y);
    fill(0,250,255);
    circle(x,y,30);
}