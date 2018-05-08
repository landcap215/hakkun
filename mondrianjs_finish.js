var three= new Array();
three[0]='#FF0303';
three[1]='#DE5F10';
three[2]='#0308FF';

function chill()
{
 for(var i=0;i<16;i++)
 {
  for(var j=0;j<16;j++)
  {
    fill(three[int(random(0,3))]);
   rect(i*40,j*40,40,40);
  }
 } 
}
function setup()
{
 createCanvas(640,640); 
 chill();
}

function draw()
{
 frameRate(60);
}

function mouseReleased()
{
 chill();
}