var length;
var wind;
var angle;
var redChannel, greenChannel, blueChannel;
var gui;

function setup() {
  createCanvas(displayWidth, displayHeight / 1.25);
  background(0);
  length = 400;
  angle = PI / 4;
  wind = 0;
  redChannel = 255;
  greenChannel = 255;
  blueChannel = 255;
  gui = createGui('Controls');
  gui.addGlobals('angle', 'wind', 'redChannel', 'greenChannel', 'blueChannel', 'length');
  translate(width / 2, height);
  noLoop();
}

function draw() {
  background(0);

  branch(length);

}

function keyPressed() {
  if (keyCode == ENTER) {
    save();
  }
}

function branch(len) {
  angle += wind;
  strokeWeight((len / length) * 10);
  stroke((len * 10 / length) * redChannel, (len * 10 / length) * greenChannel, (len * 10 / length) * blueChannel);
  line(0, 0, 0, -len);

  if (len > 10) {
    push();
    translate(0, -len);
    rotate(angle);
    branch(len * 0.80);
    pop();
    push();
    translate(0, -len);
    rotate(-angle);
    branch(len * 0.80);
    pop();
  }
}