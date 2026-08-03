function setup() {
    createCanvas(400, 400)
}
function draw() {
    fill(255, 255, 0)
    circle(200, 200, 300, 300)
    fill(255, 0, 0)
    circle(100, 200, 70, 70)
    fill(255, 0, 0)
    circle(300, 200, 70, 70)
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(200, 230, 200, 200, 0, PI);
  fill(0);
  circle(150, 130, 55); 
  fill(0);
  circle(250, 130, 55); 
}