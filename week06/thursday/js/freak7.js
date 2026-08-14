function setup(){
    createCanvas(1000,1000);
}

function draw(){
    background (20);

    fill(255,200,0)
    circle(500,500,40);

    let a1=frameCount*0.05;
    circle(500+cos(a1)*80,500+sin(a1)*80,15);

    let a2=frameCount*0.02;
    fill(100,200,255);
    circle(500+cos(a2)*140,500+sin(a2)*140,25);
    

     let a3=frameCount*(0.03);
    fill(0,250,235);
    circle(500+cos(a3)*200,500+sin(a3)*200,40);
   
    let a4=frameCount*(0.03);
    fill(70,70,70);
    circle(530+cos(a4)*200,500+sin(a4)*200,10);
}