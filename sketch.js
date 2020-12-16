let chain;
let circles;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(5);
  back = createGraphics(windowWidth,windowHeight);
  circles = createGraphics(windowWidth,windowHeight);
  circles.blendMode(SCREEN);
}

function draw() {
  back.background("#333333");
  circles.stroke("#DFF8EB");
  circles.clear();
  circles.strokeWeight(15);
  circles.noFill();
  drawCircles();
  image(back,0,0);
  image(circles,0,0);
  
}

function drawCircles(){
  let max = 9;
  let prevX, prevY;
  for (let i = 0; i<max; i++){
    prevX = 0;
    prevY = 0;
    for (let j = 0; j<max; j++){
      let x = ((width-100)/max)*i+100+random(j*4);
      let y = ((height-100)/max)*j+100+random(j*4);
     
      circles.stroke(255,0,0);
      let r = 1.5*(j+1);
      circles.circle(x+random(-r,r),y+random(-r,r), random(47,50));
      circles.stroke(0,135,0);
      circles.circle(x+random(-r,r),y+random(-r,r), random(47,50));
      circles.stroke(0,0,171);
      circles.circle(x+random(-r,r),y+random(-r,r), random(47,50));
    }
  }
  
}
