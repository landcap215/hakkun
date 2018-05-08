var h=300;

function setup()
{
 createCanvas(768,1024); 
}

function draw()
{
  background(255,94,0);
  fill(255,228,0);
  rect(70,70,628,h); 
  fill(255,0,0);
  rect(70,70+h,628,884-h);
}

function keyReleased()
{
  if(keyCode===UP_ARROW)
  {
   h-=10;
  }
  else if(keyCode===DOWN_ARROW)
  {
   h+=10;
  }
}