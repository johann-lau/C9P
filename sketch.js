var bred, bgreen, bblue, r, g, b;

function setup() {
  createCanvas(400,400);
  bred = createButton("RED");
  bred.position(100,50);
  bred.mousePressed(red_bg);
  bgreen = createButton("GREEN");
  bgreen.position(200,50);
  bgreen.mousePressed(green_bg);
  bblue = createButton("BLUE");
  bblue.position(300,50);
  bblue.mousePressed(blue_bg);
}

function draw() 
{
  background(rgb(r,g,b));
}

function red_bg() {
  r = 255;
  g = 0;
  b = 0;
}

function green_bg() {
  r = 0;
  g = 255;
  b = 0;
}

function blue_bg() {
  r = 0;
  g = 0;
  b = 255;
}