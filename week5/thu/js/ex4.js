function setup(){
    createCanvas(400,400)
}
function draw(){
    if(mouseX<width/2 && mouseY<height/2){
        background("#e74c3c")
    }
     if(mouseX>width/2 && mouseY<height/2){
        background("#3498db")
    }
     if(mouseX<width/2 && mouseY>height/2){
        background("#f1c40f")
    }
     if(mouseX>width/2 && mouseY>height/2){
        background("#2ecc71")
    }
    fill("#ffff")
    circle(mouseX,mouseY,30)
}
