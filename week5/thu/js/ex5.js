let warningDistance=70
function setup(){
    createCanvas(400,600)
}
function draw(){
    if(mouseX<warningDistance || mouseX>width-warningDistance){
        background("#e74c3c");
    }
    else{background("#3498db");}
    fill("#ffff")
    circle(mouseX,mouseY,70)
}