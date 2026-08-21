let score=0;
let lives=3;
let targetX;
let targetY;
let targetSize=80;

let gameState="waiting";
function setup(){
    const canvas=createCanvas(600,400);
    canvas.parent("canvas-container");

    const scoreElement=document.querySelector("#score-value");
    const livesElement=document.querySelector("#lives-value")
    const difficultySelect=document.querySelector("#difficulty-select")
    const startBtn=document.querySelector("#start-button")
    const resetBTN=document.querySelector("#reset-button")

    startBtn.addEventListener("click",function(){score=0;lives=3;gameState="playing";targetX=random(targetSize/2,width-targetSize/2);targetY=random(targetSize/2,height-targetSize/2);scoreElement=score;livesElement=lives;console.log(gameState="playing")})
    
}

function draw(){
    background();

    if(gameState === "playing"){
        
    }
}