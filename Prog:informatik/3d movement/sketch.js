
x=0;
z=100;
vinkel=90;

function setup() 
{
  createCanvas(400, 400,WEBGL);
}

function draw() 
{
  background(220);

  camera(x,0,z,cos(vinkel)*20+x,0,sin(vinkel)*20+z,0,1,0);

translate(0,0,-100);
  box(50);
 // line(x,y,cos(vinkel)*20+x,sin(vinkel)*20+y);
  
  //circle(x,y,20);

if(keyIsDown(87))
{
  x=x+cos(vinkel);
  z=z+sin(vinkel);
}

if(keyIsDown(LEFT_ARROW))
{
  vinkel=vinkel-0.1;
}
if(keyIsDown(RIGHT_ARROW))
{
  vinkel=vinkel+0.1;
}


if(keyIsDown(83))
{
  x=x-cos(vinkel);
  z=z-sin(vinkel);
}

if(keyIsDown(65))
{
  x=x+sin(vinkel);
  z=z-cos(vinkel);
}

if(keyIsDown(68))
{
  x=x-sin(vinkel);
  z=z+cos(vinkel);
}
}