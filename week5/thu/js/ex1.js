function setup() {
    createCanvas(600, 400);
}
function draw() {
    if (mouseX > width / 2) { background("#00d9ffff"); }
    else { background("#ffb700ff"); }
    fill("#716e6eff")
    circle(mouseX, mouseY, 50)
}