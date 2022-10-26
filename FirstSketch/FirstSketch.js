function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  translate(width/2,height/2)
  rotate(frameCount)
  translate(frameCount,0)
  if(frameCount%5<3){
    fill(53-random(200), 80, 112)
  }else{
    fill(229-random(200), 107, 111)  
  }
  rect(300,300,5,60)
}
