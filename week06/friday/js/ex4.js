
function setup  (){
    createCanvas(800,400)
}
function draw(){
    background("#3e0101ff")
    fill("#000000ff")
     for(let i=0; i<10;i++){

      let x=(i)*100;
         let y=200+sin(frameCount*0.05+i*3)*20;
        circle(x,y,100)}
}