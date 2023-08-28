x=0;
z=0;
vinkel=90;
y=-75;
view=y;


speed=4;

let grass;


function setup() 
{
  createCanvas(400, 400,WEBGL);
  //angleMode(DEGREES);
  grass=loadImage('grass.jpeg');

}

function draw() 
{
  background(69, 125, 168);

  camera(x,y,z,cos(vinkel)*20+x,view,sin(vinkel)*20+z,0,1,0);
push();
translate(0,-25,-100);
  box(50);
  pop();


for(i=-10;i<10;i++)
{  
  for(j=-10;j<10;j++)
{  
  push();
  fill(60, 166, 79);
  noStroke();
  rotateX(PI/2);
  texture(grass);
  translate(300*i,300*j,0);
  plane(300,300);
  pop();
}
}

if(keyIsDown(87))
{
  x=x+cos(vinkel)*speed;
  z=z+sin(vinkel)*speed;
}

if(keyIsDown(LEFT_ARROW))
{
  vinkel=vinkel-0.03;
}
if(keyIsDown(RIGHT_ARROW))
{
  vinkel=vinkel+0.03;
}

if(keyIsDown(UP_ARROW))
{
  view=view-1;

}

if(keyIsDown(DOWN_ARROW))
{
  view=view+1;
}




if(keyIsDown(83))
{
  x=x-cos(vinkel)*speed;
  z=z-sin(vinkel)*speed;
}

if(keyIsDown(65))
{
  x=x+sin(vinkel)*speed;
  z=z-cos(vinkel)*speed;
}

if(keyIsDown(68))
{
  x=x-sin(vinkel)*speed;
  z=z+cos(vinkel)*speed;
}
}