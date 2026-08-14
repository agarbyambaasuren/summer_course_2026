let snowflakes=[];
function setup(){
 createCanvas(600,450)
 for(
    let i=0;i<40;i++
 ){snowflakes.push({
    x:random(width),
    y:random(height),
    speed:random(0.5,2.5),
    size:random(3,10),
 })}
}
function draw(){
    background("#123456")
    for(let s of snowflakes){
        fill("#ffffffff")
        circle(s.x, s.y, s.size)    
        s.y+=s.speed
        noStroke();
        if(s.y>height){s.y=0;s.x=random(width);}
    }
}