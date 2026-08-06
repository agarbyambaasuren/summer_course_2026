let isPressed=false;
let circleSize=100;
let circleColor="#3498db";
function setup(){
    craeteCanvas(400,600)
}
function draw(){
    if (isPressed===true){circleSize=200;background( circleColor)}
    else{circleSize100;circleColor("#3498db")}
}
function mousePressed(){
    isPressed=true
    isPressed=false
}