
x=200;
y=200;
vinkel=0;

function setup() 
{
  createCanvas(400, 400);

}

function draw() 
{
  background(220);

  text(vinkel,20,20);
  line(x,y,cos(vinkel)*20+x,sin(vinkel)*20+y);
  
  circle(x,y,20);

if(keyIsDown(87))
{
  x=x+cos(vinkel);
  y=y+sin(vinkel);
}

if(keyIsDown(LEFT_ARROW))
{
  vinkel=vinkel+0.1;
}
if(keyIsDown(RIGHT_ARROW))
{
  vinkel=vinkel-0.1;
}



}
