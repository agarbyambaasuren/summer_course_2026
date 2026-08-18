let particles = [];

function setup() {
    createCanvas(150, 150);
    buildScene(artPlan);
}

function buildScene(plan) {
    particles = [];

    for (let i = 0; i < plan.count; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            size: random(15, 25),
            vx: random(plan.speed, -plan.speed),
            vy: random(plan.speed, -plan.speed),
            color: random(plan.palette)
        });
    }
}

function draw() {
    background(artPlan.background);

    for (let particle of particles) {
        updateParticle(particle);
        drawParticle(particle, artPlan.shape);
    }
}

function updateParticle(particle) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > width) {
        particle.vx *= -1;
    }

    if (particle.y < 0 || particle.y > height) {
        particle.vy *= -1;
    }
}

function drawParticle(particle, shape) {
    noStroke();
    fill(particle.color);

    if (shape === "square") {
        rectMode(CENTER);
        square(particle.x, particle.y, particle.size);
    } else {
        circle(particle.x, particle.y, particle.size);
    }
    if (shape === "circle") { circle(particle.x, particle.y, particle.size); } else {
        triangle(particle.x, particle.y, particle.x + 10, particle.y, particle.x + 5, particle.y + 10)
    }
}

const artPlan = {
    title: "Sunset Energy",
    background: "#ffffffff",
    palette: ["#ff0026ff", "#ff8800ff", "#fff200ff", "#8cff00ff", "#00e5ffff", "#002affff", "#8400ffff", "#ff00f7ff"],
    shape: "circle",
    count: 350,
    speed: 2
};
function mousePressed() {
    buildScene(artPlan)
    if (artPlan.shape === "circle") {
      artPlan.shape = "circle";  
    } else {
        artPlan.shape = "square";
    }
    if (artPlan.shape = "square") {
         artPlan.shape = "square"; }
        else { artPlan.shape = "triangle" }
}