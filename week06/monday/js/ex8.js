function setup() {
createCanvas(600, 350);
}
function draw() {
background("#f5f5f5");
let size1=calculateSize(10);
let size2=calculateSize(5);
fill("#fff")
calculateSize(size1)
circle(100,100,size1)
calculateSize(size2)
circle(200,200,size2)
}
function calculateSize(number){
    return number*20
}