let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;
let dvdimg;
let dvdsound;


function preload(){
  dvdimg = loadImage("/images/dvdvideoimg.png")
  dvdsound = loadSound("/sounds/dvdvideosound.mp3")
}

function setup() {
  imageMode(CENTER)
  createCanvas(500, 500);
  background(0);
  xSpeed = random(-5,5)
  ySpeed = random(-5,5)
}

function draw() {
  background(0);

  fill(0, 255, 0);
  image(dvdimg,xPos,yPos,50,50)
  xPos+= xSpeed * xDirection;
  yPos+= ySpeed * yDirection;
  
  if(xPos<25 || xPos>475){
    xDirection*=-1
    dvdsound.play()
  }
  if(yPos<25 || yPos>475){
    yDirection*=-1
    dvdsound.play()
  }
}
