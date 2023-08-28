
posX=0;
posY=0;
posZ=300;

viewX=posX;
viewY=posY;
viewZ=posZ+100;

bulletX=random(posX-25,posX+25);
bulletY=random(posY-25,posY+25);
bulletZ=random(0,100);
bulletR=20;

bulletSpeed=10;

movementSpeed=5;

afstand=0;


function setup() 
{
  createCanvas(400, 400,WEBGL);
  angleMode(DEGREES);
}

function draw() 
{
  background(220);
  camera(posX,posY,posZ,viewX,viewY,0,0,1,0);

 
 

  viewX=posX;
  viewY=posY;
  viewZ=posZ+100;

  bulletZ=bulletZ+10;



  push();
  //box(20);
  Bullet(bulletX,bulletY,bulletZ,bulletR);
  pop();

 afstand=sqrt(posX*bulletX+posY*bulletY+posZ*bulletZ);

 if (afstand<bulletR/2)
 {
  if(afstand<0)
  {afstand=-afstand;}
  
  else{
    bulletX=random(-100,100);
  }
 }

  if(bulletZ>330)
  {
    bulletX=random(posX-25,posX+25);
    bulletY=random(posY-25,posY+25);
    bulletZ=random(-10,-40);
  }


  if(keyIsDown(LEFT_ARROW))

  {
  posX=posX-movementSpeed;
  }

  if(keyIsDown(RIGHT_ARROW))
{
  posX=posX+movementSpeed;
}

if(keyIsDown(UP_ARROW))
{
  posY=posY-movementSpeed;

}

if(keyIsDown(DOWN_ARROW))
{
  posY=posY+movementSpeed;
}

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

 
 
}

function Bullet(bulletX,bulletY,bulletZ,bulletR)
{
  push();
  translate(bulletX,bulletY,bulletZ);
  fill(0);
  sphere(bulletR);
  pop();
}


