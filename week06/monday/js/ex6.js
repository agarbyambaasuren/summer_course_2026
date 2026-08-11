function setup(){
    createCanvas(1000,1000)
}
function draw(){
drawFish(250,250,100)
drawFish(50,100,20)
drawFish(500,250,100)
drawFish(750,750,150)
drawFish(750,100,50)
}
function drawFish(x,y,size){
    fill("#ff9d00ff")
    ellipse(x,y,size+(size/4),size)
    fill("#ffea00ff")
    triangle(x-(size+size/4),y+size/2,x-(size/4),y,x-(size+size/4),y-size/2)
    fill("#fff")
    circle(x+size/2,y,size/10)
}