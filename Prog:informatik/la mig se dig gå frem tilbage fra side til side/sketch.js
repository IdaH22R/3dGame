
//Camera position variables
posX = 0;
posY = 0;
posZ = 300;

//Camera view variables
viewX = posX;
viewY = posY;
viewZ = posZ+100;

//Bullet position variables
bulletX = random(posX-25,posX+25);
bulletY = random(posY-25,posY+25);
bulletZ = random(0,100);
bulletR = 20;
bulletSpeed = 25;
movementSpeed = 5;
rColor = 0;
gColor = 0;
bColor = 0;

//Wall colors
rColor2 = 255;
gColor2 = 255;
bColor2 = 255;



//Collision detction
afstand = 0;
hit = 0;


function setup() 
{
  createCanvas(400, 400,WEBGL);
  angleMode(DEGREES);
}

function draw() 
{
  background(220);
  camera(posX,posY,posZ,viewX,viewY,0,0,1,0);

  //Calculates distance between you and the bullet
  afstand=sqrt((bulletX-posX)*(bulletX-posX)+(bulletY-posY)*(bulletY-posY)+(bulletZ-posZ)*(bulletZ-posZ));
 
  //Detects if you have been hit or not
  if(afstand<bulletR)
  {
  
    if(afstand<0)
    {
      afstand=-afstand;
    }
    else{bulletX=random(-100,100);
    hit=hit+1;
    rColor=rColor+50;
    }
  }

  //shows amount of hits 
 console.log(hit);

 //death
 if(hit==3)
 {
  rColor2 = 20;
gColor2 = 20;
bColor2 = 20;
bulletZ=-100;
 }

//updates camera
  viewX=posX;
  viewY=posY;
  viewZ=posZ+100;




  //shows and makes bullet move
  push();
  Bullet(bulletX,bulletY,bulletZ,bulletR);

  bulletZ=bulletZ+bulletSpeed;
  pop();

//sends bullet back 
  if(bulletZ>330)
  {
    bulletX=random(posX-25,posX+25);
    bulletY=random(posY-25,posY+25);
    bulletZ=random(-10,-40);
  }

//Detects movement when pressing arrows
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

//Creates walls

 //right wall
 push();
 rotateY(270);
 translate(100,0,-100);
 fill(rColor2,gColor2,bColor2);
 plane(200,200);
 pop();

//left wall
 push();
 rotateY(90);
 translate(-100,0,-100);
 fill(rColor2,gColor2,bColor2);
 plane(200,200);
 pop();

//roof
 push();
 rotateX(-90);
 translate(0,-100,-100);
 fill(rColor2,gColor2,bColor2);
 plane(200,200);
 pop();

 //floor
 push();
 rotateX(90);
 translate(0,100,-100);
 fill(rColor2,gColor2,bColor2);
 plane(200,200);
 pop();

 //back wall
 push();
 translate(0,0,0);
 fill(rColor2,gColor2,bColor2);
 plane(200,200);
 pop();
}
 
//creates Bullet
function Bullet(bulletX,bulletY,bulletZ,bulletR)
{
  push();
  translate(bulletX,bulletY,bulletZ);
  stroke(rColor,gColor,bColor);
  fill(rColor,gColor,bColor);
  sphere(bulletR);
  pop();
}


