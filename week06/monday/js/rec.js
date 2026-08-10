function setup(){createCanvas(800,300)};
function draw(){
    background("#f5f5f5");

    fill("#3498db");
    noStroke();

    for (let i=0;i<10;i++){
        circle(50+i*90,150,10+i*10)
    }
}