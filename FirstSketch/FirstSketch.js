function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  translate(width/2,height/2)
  rotate(frameCount)
  translate(frameCount,0)
  if(frameCount%5<3){
    fill(53-random(50), 255, 255)
  }else{
    fill(229-random(110), 255, 255)  
  }
  rect(200,200,5,60)
}
