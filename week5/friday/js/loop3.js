function setup(){
    createCanvas(700,350)
}
function draw(){
    background("#f5f5f5")
    fill ("#9b59b6");
    noStroke();
    for(let i=0;i<5;i++){
     circle(100+i*120,175,40+i*20)
    }
}