let scene = {
  color: "#ffffff",
};
let currentTool = "circle";
let pg;

function setup() {
  const canvas = createCanvas(900, 900);
  canvas.parent("canvas-container");
  pg = createGraphics(900, 900);
  background(scene.color);

  const bgcolor = document.querySelector(".backgroundColor");
  bgcolor.addEventListener("input", function () {
    scene.color = bgcolor.value;
  });

  document.querySelector(".circleBrush").addEventListener("click", function () {
    currentTool = "circle";
  });
  document.querySelector(".squareBrush").addEventListener("click", function () {
    currentTool = "square";
  });
  document.querySelector(".eraser").addEventListener("click", function () {
    currentTool = "eraser";
  });
}

function draw() {
  background(scene.color);
  image(pg, 0, 0);
}

function mouseDragged() {
  const circleWidth = document.querySelector(".circleWidth").value;
  const squareWidth = document.querySelector(".squareWidth").value;
  const eraserWidth = document.querySelector(".eraserWidth").value;
  const circleColor = document.querySelector(".circleBrushColor input").value;
  const squareColor = document.querySelector(".squareBrushColor input").value;

  pg.noStroke();
  if (currentTool === "circle") {
    pg.fill(circleColor);
    pg.circle(mouseX, mouseY, circleWidth);
  } else if (currentTool === "square") {
    pg.fill(squareColor);
    pg.square(mouseX, mouseY, squareWidth);
  } else if (currentTool === "eraser") {
    pg.blendMode(REMOVE);
    pg.fill(0, 0, 0, 0);
    pg.circle(mouseX, mouseY, eraserWidth);
    pg.blendMode(BLEND);
  }
}
