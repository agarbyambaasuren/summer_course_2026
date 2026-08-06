let buttonX =200;
let buttonY=150;
let buttonWidth=200;
let buttonHeight=80;
function setup(){
    createCanvas(400,600)
    targetX = random(targetSize / 2, width - targetSize / 2);
  targetY = random(targetSize / 2, height - targetSize / 2);
  textSize(20);
}
function draw() {
  background(240);
  fill('#e74c3c');
  noStroke();
  circle(targetX, targetY, targetSize);

  fill(0);
  text("Score: " + score, 20, 30);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, targetX, targetY);
  if (d < targetSize / 2) {
    score += 1;
    targetX = random(targetSize / 2, width - targetSize / 2);
    targetY = random(targetSize / 2, height - targetSize / 2);
  } else {
    score -= 1; 
  }
}