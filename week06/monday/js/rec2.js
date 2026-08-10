let boxSize = 45;
let startX = 60;
let gap = 70;
function setup() {
    createCanvas(800, 400);
    rectMode(CENTER);
}
function draw() {
    background("#f5f5f5");
    for(let i=0;i<10;i++){fill("#3498db");rect(startX+i*50,100,boxSize)}
     for(let i=0;i<10;i++){fill("#e67e22");rect(startX+i*50,150,boxSize)}
      for(let i=0;i<10;i++){fill("#2ecc71");rect(startX+i*50,200,boxSize)}
}