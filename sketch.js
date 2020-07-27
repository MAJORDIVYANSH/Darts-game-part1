var rectangle , rectangle2 , box1 , box2 , box3 , box4 , box5 , box6;
var box7 , box8 , box9 , box10 , box11 , box12;
var box13;

function setup() {
  createCanvas(2100,1200);
  

  
  rectangle2=createSprite(1290,280,380,20);
  rectangle2.shapeColor=color("blue");

  box1=createSprite(180,380,70,70);
  box1.shapeColor=color("red");

  box2=createSprite(1150,240,50,50);
  box2.shapeColor=color("yellow");

  box3=createSprite(1205,240,50,50);
  box3.shapeColor=color("yellow");

  box3=createSprite(1320,240,50,50);
  box3.shapeColor=color("yellow");

  box4=createSprite(1375,240,50,50);
  box4.shapeColor=color("yellow");

  box5=createSprite(1260,240,50,50);
  box5.shapeColor=color("yellow"); 

  box6=createSprite(1435,240,50,50);
  box6.shapeColor=color("yellow");

  //level2;
  box7=createSprite(1190,180,50,50);
  box7.shapeColor=color("red");

  box8=createSprite(1250,180,50,50);
  box8.shapeColor=color("red");

  box9=createSprite(1310,180,50,50);
  box9.shapeColor=color("red");

  box10=createSprite(1370,180,50,50);
  box10.shapeColor=color("red");

  //level3
  box11=createSprite(1245,120,50,50);
  box11.shapeColor=color("green");

  box12=createSprite(1305,120,50,50);
  box12.shapeColor=color("green"); 

  //level4
  box13=createSprite(1280,60,50,50);
  box13.shapeColor=color("purple");

  }

function draw() {
  background("black");
  

  rectangle2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  drawSprites();
}