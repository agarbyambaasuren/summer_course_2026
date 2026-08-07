function setup(){
    createCanvas(1000,400)
}
function draw(){
    background("rgba(130,117,117,0.33)");
 let x=50;
    for( let i=0;i<500;i++){
        circle(x,200,400);
        x=x+1.5;
    }
   fill(150,255,25)
    for (let i=0;i < 10;i++) {
        print(i);
    }
}