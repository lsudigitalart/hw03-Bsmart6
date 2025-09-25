let moons = [];

function setup() {
  createCanvas(600, 600);
  // Create 100 crescent moons at random positions
  for (let i = 0; i < 100; i++) {
    moons.push({
      x: random(width),
      y: random(-height, 0), // start above canvas
      speed: random(1, 3)
    });
  }
}

function draw() {
  // Starry background
  background(10, 20, 60);
  for (let i = 0; i < 200; i++) {
    stroke(255, 255, 0, 150);
    point(random(width), random(height));
  }
  
  noStroke();

  for (let moon of moons) {
    drawCrescent(moon.x, moon.y, 20);

    // If mouse is inside canvas, stop movement
    if (!(mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height)) {
      moon.y += moon.speed; // normal falling only when mouse OUTSIDE
    }

    // Reset moon when it goes past bottom
    if (moon.y > height + 20) {
      moon.y = -20;
      moon.x = random(width);
    }
  }
}

function drawCrescent(x, y, r) {
  fill(255);
  ellipse(x, y, r * 2);
  fill(10, 20, 60);
  ellipse(x + r / 3, y, r * 2);
}