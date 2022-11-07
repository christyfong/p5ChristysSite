// for red, green, and blue color values
let r, g, b;
let r1, g1, b1;

let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 10; // Speed of the shape
let yspeed = 3.85; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
var canvas;
function windowResized(){
  resizeCanvas(windowWidth, 890);
}





function setup() {
canvas= createCanvas(windowWidth, 890);
canvas.position(0, 0);
canvas.style('z-index', '-1');
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;

  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);

  r1 = random(255);
  g1 = random(255);
  b1 = random(255);
}

function draw() {
  background(r1, g1, b1, 4);
  // Draw a circle
  strokeWeight(2);
  noStroke();
  fill(r, g, b, 255);
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, xpos, ypos);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);

    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
  }
}
