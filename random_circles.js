var Diam = new Array(10);
var centX = new Array(10);
var centY = new Array(10);

function setup()
{
  createCanvas(1024,768);
  background(255);
  
  for(var i=0;i<10;i++)
  {
    Diam[i] = int(random(height));
    centX[i] = int(random(width));
    centY[i] = int(random(height));
  }
  stroke(0);
  strokeWeight(3);
  fill(255,5);
}

function draw()
{
  for(var i=0;i<10;i++)
  {
    ellipse(centX[i],centY[i],Diam[i],Diam[i]);
    Diam[i]+=10;
    Diam[i]%=width;
  }
}