function setup(){
    createCanvas(600,400)
}
function draw(){
    background("#ffff")
    if (mouseY<height/2){background("#2ecc71")}
    else{"#9b59b6"}
    circle(300,200,140)
}