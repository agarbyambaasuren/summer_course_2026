function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(20, 20, 35); 
  
  
  let centerX = width / 2;
  let centerY = height / 2;
  let sunSize = 80;
  
  let orbitRadius = 150;
  let angle = frameCount * 0.02;
  

  let planetX = centerX + cos(angle) * orbitRadius;
  let planetY = centerY + sin(angle) * orbitRadius;
  
  
  noFill();
  stroke(100);
  ellipse(centerX, centerY, orbitRadius * 2);
  
  noStroke();
  fill(255, 204, 0); 
  ellipse(centerX, centerY, sunSize, sunSize);
  
  ellipse(planetX, planetY, 30, 30);
  
  let orbitRadius2 = 230;
  let angle2 = frameCount * 0.01;
  let planet2X = centerX + cos(angle2) * orbitRadius2;
  let planet2Y = centerY + sin(angle2) * orbitRadius2;
  
  stroke(80);
  ellipse(centerX, centerY, orbitRadius2 * 2); 
  
  noStroke();
  fill(230, 100, 100);
  ellipse(planet2X, planet2Y, 20, 20);
}