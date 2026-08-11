let drops = [

]
function setup() {
    createCanvas(400, 400)
    for (i = 0; i < 10; i++) {
        drops.push({
            x: random(width),
            y: random(height),
            speed: (2, 6),
            size: random(10, 30)
        })
    }
    console.log(drops);

}
function draw() {
    background("#00e1ffff")
    for (let d of drops){
        circle(
            d.x,
            d.y=d.y+d.speed,
            d.size,
        )
        if(d.y>height){
        d.y=0
    }
    }
   
}