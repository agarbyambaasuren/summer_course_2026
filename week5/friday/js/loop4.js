function setup (){
    createCanvas(1000,1000)
}
function draw()
{
    background("#f5f5f5")
    noStroke();
    for (let i=0;i<5;i++){
        circle(50+i*75,150,55)
        let redValue=50+i*20; 
           fill(redValue,100,180);
    }
 for (let i=0;i<5;i++){
        circle(50+i*75,250,55)
        let redValue=50+i*20; 
           fill(redValue,50,130);
    }
 for (let i=0;i<5;i++){
        circle(50+i*75,350,55)
        let redValue=50+i*20; 
           fill(redValue,30,110);
    } for (let i=0;i<5;i++){
        circle(50+i*75,450,55)
        let redValue=50+i*20; 
           fill(redValue,10,10);
    } for (let i=0;i<5;i++){
        circle(50+i*75,550,55)
        let redValue=50+i*20; 
           fill(redValue,0,80);
    }
}