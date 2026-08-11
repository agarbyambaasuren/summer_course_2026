function setup (){
    createCanvas(1000,1000)
}
function draw(){
drawHouse(500,500)
drawHouse(100,500)
drawHouse(500,100)
drawHouse(100,100)
}
function drawHouse(x,y){
    fill("#741616ff")
    rect(x,y,300,200)
    fill("#ffbb00ff")
    triangle(x,y,x+150,y-100,x+300,y)
    fill("#00fbffff")
    rect(x+125,y+100,50,100)
    fill("#dd00ffff")
    rect(x+50,y+50,50,50)
    rect(x+200,y+50,50,50)
}