
posX=0;
posY=0;
posZ=100;

speedX=1;
speedY=2;
speedZ=-3;

boxSize=50;

let gulle;
let gulle2;

v1X=3;
v1Y=15;
v1Z=100;

v2X=10;
v2Y=-12;
v2Z=10;

rX=v2X-v1X;
rY=v2Y-v1Y;
rZ=v2Z-v1Z;



function setup() 
{
  createCanvas(400, 400,WEBGL);
  angleMode(DEGREES);
  gulle=loadImage('Gulle.png');
  gulle2=loadImage('Gulle.2.png');
}

function draw() 
{
  background(220);

for(t=-100;t<100;t=t+0.5)
{
  x=v1X+rX*t;
  y=v1Y+rY*t;
  z=v1Z+rZ*t;
  MinKugle(x,y,z);
}


  posX=posX+speedX;
  posY=posY+speedY;
  posZ=posZ+speedZ;

  pointLight(255,20,20,posX+boxSize,posY,posZ);
  pointLight(20,255,20,posX-boxSize,posY,posZ);

  pointLight(20,255,20,posX,posY+boxSize,posZ);
  pointLight(20,255,20,posX,posY-boxSize,posZ);

  pointLight(255,255,255,posX,posY,posZ+boxSize);
  pointLight(20,20,255,posX,posY,posZ-boxSize);

  

  texture(gulle);
  noStroke();

  //right wall
  push();
  rotateY(270);
  translate(100,0,-100);
  plane(200,200);
  pop();

//left wall
  push();
  rotateY(90);
  translate(-100,0,-100);
  plane(200,200);
  pop();

//roof
  push();
  rotateX(-90);
  translate(0,-100,-100);
  plane(200,200);
  pop();

  //floor
  push();
  rotateX(90);
  translate(0,100,-100);
  plane(200,200);
  pop();

  //back wall
  push();
  translate(0,0,0);
  plane(200,200);
  pop();



push();
  translate(posX,posY,posZ);
  texture(gulle2);
  box(boxSize);
  pop();

 if(posX>100-boxSize/2)
 {
  speedX=-speedX;
 }
 
 if(posX<-100+boxSize/2)
 {
  speedX=-speedX;
 }

 if(posY>100-boxSize/2)
 {
  speedY=-speedY;
 }
 
 if(posY<-100+boxSize/2)
 {
  speedY=-speedY;
 }

 if(posZ>200-boxSize/2)
 {
  speedZ=-speedZ;
 }
 
 if(posZ<0+boxSize/2)
 {
  speedZ=-speedZ;
 }

}

function MinKugle(x,y,z)
{
push();
translate(x,y,z);
  sphere(5);
  pop();
}