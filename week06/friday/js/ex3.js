function setup (){
    createCanvas(600,600)
}

function draw(){
    background("#ff0000ff")
    circle(300,300,100)
  let frameCount1=frameCount&60;
    if(frameCount1<60){fill("#ffe600ff");}
    else{fill("#000000ff");}
}