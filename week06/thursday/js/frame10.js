function setup (){
    createCanvas(500,400)

}

function draw(){
 background("#00ffc8ff")
    fill("rgba(234, 255, 0, 1)")
    let size=100+sin(frameCount*0.5)*100;
    circle(250,200,size)}