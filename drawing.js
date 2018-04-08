function drawManbo(x,y,size){ 
/* x= x position
   y= y position
   size= size
   */
  strokeWeight(size*0.007);
  stroke(0);
 
  //ear
  fill(0,100,105);
  arc(x-size*0.2,y-size*0.6,size*0.3,size*0.24,radians(274.4),radians(339));
  arc(x+size*0.2,y-size*0.6,size*0.3,size*0.24,radians(201),radians(265.8));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(172.5),radians(210));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(330.5),radians(367.5));
 
  //arm
  ellipse(x,y+size*0.04,size*1.16,size*0.4);
  arc(x,y+size*0.2,size*1.22,size*1.15,radians(200),radians(340));
 
  //head
  stroke(0);
 ellipse(x,y-0.48*size,size*0.55,size*0.4);
//face
  noStroke();
  fill(255,245,220);
  ellipse(x, y-0.42*size,size*0.40,size*0.30);
  fill(0,100,105);
  arc(x,y-0.65*size,size*0.2,size*0.2,radians(20),radians(160));
 
  //eye
 strokeWeight(size*0.007);
 stroke(0);
 line(x-size*0.15,y-size*0.495,x-size*0.07,y-size*0.505);
 line(x+size*0.15,y-size*0.495,x+size*0.07,y-size*0.505);
 
 //tooth
 noFill();
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(189),radians(210));
 arc(x-size*0.102,y-0.45*size,size*0.13,size*0.1,radians(330),radians(350));
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(330),radians(351));
 arc(x+size*0.102,y-0.45*size,size*0.13,size*0.1,radians(190),radians(210));
 
 //mouse
 arc(x,y,size,size*0.92,radians(263),radians(277));
 
  //body
  stroke(0);
  fill(0,100,105);
ellipse(x,y-size*0.02, size*0.98,size*0.75);
  //Bae?
  strokeWeight(size*0.007);
  fill(255,245,220);
  arc(x,y, size,size*0.79,radians(224.5), radians(315.8));
  arc(x,y-size*0.353,size,size*0.9,radians(45),radians(138));
  arc(x-size*0.11,y-size*0.105,size*0.9,size*1.2,radians(335),radians(370));
  arc(x+size*0.105,y-size*0.105,size*0.9,size*1.2,radians(169),radians(205.5)); 
  fill(0,100,105);
  arc(x,y+0.15*size,size*0.5,size*0.25,radians(206),radians(338));
  noStroke();
  arc(x,y+0.15*size,size*0.5-size*0.007,size*0.25-size*0.007,radians(180),radians(360));
  ellipse(x,y+0.15*size,size*0.3,size*0.2);
 //foot 
  stroke(0);
  fill(255,245,220);
  ellipse(x-size*0.29,y+size*0.3,size*0.38,size*0.3);
  ellipse(x+size*0.29,y+size*0.3,size*0.38,size*0.3);
  fill(170,117,87);
  ellipse(x-size*0.29,y+size*0.3,size*0.18,size*0.13);
  ellipse(x+size*0.29,y+size*0.3,size*0.18,size*0.13);
  
  //lettering?
  strokeWeight(size*0.013);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.48);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.55);
  line(x-size*0.45,y-size*0.55,x-size*0.38,y-size*0.55);
  line(x-size*0.44,y-size*0.51,x-size*0.40,y-size*0.51);
  strokeWeight(size*0.01);
  line(x-size*0.4,y-size*0.44,x-size*0.35,y-size*0.46);
  line(x-size*0.35,y-size*0.46,x-size*0.37,y-size*0.4);
  line(x-size*0.37,y-size*0.4,x-size*0.33,y-size*0.42);
  line(x-size*0.38,y-size*0.43,x-size*0.34,y-size*0.44);

function drawSnowman(x,y,size){
strokeWeight(6);
stroke(0);
fill(255);
//body//
ellipse(x,y-50,size,size);
ellipse(x,y,size+20,size+20);
//eyes//
point(x-10,y-52);
point(x+10,y-52);
//mouth//
strokeWeight(3);

arc(x,y-150,x-310,y-90,radians(87),radians(93));
//muffler//
fill(227,114,114);
noStroke();
rect(x-25,y-39,49,15,5);
 triangle(x+20,y-35,x+36,y-30,x+33,y-36);
//button//
stroke(0);
strokeWeight(4);
point(x,y-18);
point(x,y-5);
point(x,y+8);
}

function drawCloud(x,y,z,w,k)
{
  noStroke();
  fill(k);
  ellipse(x,y,z,z);
  ellipse(x-w,y,0.8*z,0.8*z);
  ellipse(x+w,y,0.8*z,0.8*z);
}
function drawFrog(x,y,size) {  
  noStroke();

  /*head*/
  fill(53, 182, 44);
  ellipse(x, y-size/4.8, size/1.25, size/1.5); 
  ellipse(x-size/4.8, y-size/2, size/4, size/4); 
  ellipse(x+size/4.8, y-size/2, size/4, size/4); 

  /*body*/
  ellipse(x, y+size/4, size, size); 
  fill(109, 200, 59);
  ellipse(x, y+size/3.7, size/1.6, size/1.5);

  /*legs*/
 
  fill(53, 182, 44);
  bezier(x+size/2.4, y+size/80, x+size/1.1, y-size/12, x+size/1.85, y+size/1.5, x+size/2.4, y+size/1.5);
  bezier(x-size/2.4, y+size/80, x-size/1.1, y-size/12, x-size/1.85, y+size/1.5, x-size/2.4, y+size/1.5);
  rect(x+size/3, y+size/2, size/3, size/4.8, 100);
  rect(x-size/1.55, y+size/2, size/3, size/4.8, 100);
/*eyes*/
  fill(255); 
  ellipse(x-size/4.8, y-size/2, size/6, size/6); 
  ellipse(x+size/4.8, y-size/2, size/6, size/6); 

  fill(0); 
  ellipse(x-size/4.8, y-size/2, size/8, size/8); 
  ellipse(x+size/4.8, y-size/2, size/8, size/8);   

  ellipse(x-size/24, y-size/2.7, size/40, size/40); 
  ellipse(x+size/24, y-size/2.7, size/40, size/40); 

  fill(255); 
  ellipse(x-size/5.3, y-size/1.9, size/40, size/40); 
  ellipse(x+size/5.3, y-size/1.9, size/40, size/40); 

  /*cheek*/
  fill(200, 0, 0); 
  ellipse(x-size/4, y-size/3.9, size/4, size/4); 
  ellipse(x+size/4, y-size/3.9, size/4, size/4);

  /*mouth*/
  noFill();
  stroke(0);
  strokeWeight(size/55);
  arc(x, y-size/3.5, size/3, size/4, 0, PI);
} 
function drawOlaf(x,y,a,b){
   rectMode(CENTER);
  ellipseMode(CENTER);

  //arm
  fill(185,122,87);
  rect(x+65,y,a-77,b-10);
  rect(x-15,y+60,a+10,b-97);
  rect(x+70,y-25,a-65,b-97);
  rect(x-50,y+52,a-77,b-85);
  rect(x-41,y+65,a-77,b-87);

  //body
  fill(218,218,218);
  ellipse(x,y,a,b);//220,200,80,100
  ellipse(x+40,y+60,a-5,b-30);
  ellipse(x+35,y+125,a+20,b-10);
  ellipse(x-13,y+170,a-35,b-60);
  ellipse(x+60,y+180,a-35,b-60);

  //button
  fill(0);
  ellipse(x+40,y+65,a-65,b-85);
  ellipse(x+35,y+110,a-65,b-85);
  ellipse(x+30,y+140,a-63,b-85);
//eye
  fill(255);
  ellipse(x-20,y-10,a-63,b-80);
  ellipse(x+8,y-20,a-63,b-80);
  fill(0);
  ellipse(x-20,y-8,a-75,b-95);
  ellipse(x+8,y-18,a-75,b-95);
  fill(255);
  ellipse(x-19,y-9,a-77,b-97);
  ellipse(x+9,y-19,a-77,b-97);

  //nose
  fill(255,103,2);
  triangle(x-15,y-5,x-30,y+10,x,y);
 
  //mouth
  fill(97,97,97);
  triangle(x-20,y+20,x+20,y,x,y+35);
}

/*float x: flower center x coordinate
  float y: flower center y coordinate
  float diameter: flower orange circle diameter*/
function drawRose(x,y,diameter){
  translate(x, y);
  stroke(42, 116, 32);
  strokeWeight(5);
  curve(-100, 0, 0, diameter / 2,
       0, diameter * 2, -400, diameter * 2 + 50); 
  stroke(0);
  strokeWeight(3);
  fill(222, 11, 15);
  for(int i = 0; i < 6; i++) {
    arc(-(diameter / 2) * 0.5, 0, (diameter / 2) * sqrt(3),
        (diameter / 2) * sqrt(3), radians(90), radians(270));
    rotate(radians(60));
  }

  for (int i = 0; i < 6; i++) {
    arc(0, -((diameter / 2) * sqrt(3) * 0.5),
        diameter / 2, diameter / 2, radians(180), radians(360));
    rotate(radians(60));
  }
fill(255, 128, 0);
  ellipseMode(CENTER);
  ellipse(0, 0, diameter, diameter);
  fill(232, 94, 96);
  rectMode(CENTER);
  float rectwid= diameter / sqrt(2);
  for (int i = 0; i < 7; i++) {
    rect(0, 0, rectwid, rectwid);
    rectwid = (rectwid / 2) * sqrt(2);
    rotate(radians(45));
  }
  rotate(radians(45));
  fill(84, 178, 70);
  float x1 = 47;
  float y1 = diameter + diameter / 3;
  float x2 = diameter / 6 + diameter / 2;
  float y2 = diameter + diameter / 80;
  float x3 = diameter / 6 + diameter / 1.1;
  float y3 = diameter + diameter / 10;
  float x4 = diameter / 6 + diameter / 1.5;
  float y4 = diameter + diameter / 2.5;
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  line(x1, y1, x3, y3);
  translate(-x, -y);
}

function setup()
{
  createCanvas(1024,768);
  background(0,216,255);
 drawManbo(512,384,200);
 drawSnowman(200,400,50);
drawCloud(550,100,100,50,255);
drawCloud(200,120,120,60,255);
drawCloud(800,110,110,55,255);
drawFrog(700,500,50);
drawOlaf(350,550,80,100);
drawRose(800,500,100);
}