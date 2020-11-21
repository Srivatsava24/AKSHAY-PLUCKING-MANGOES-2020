
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy, boyImg;
var tree;
var stone;
var slingShot;
var mango1, mango2, mango3, mango4, mango5, mango6;

var slingShot;

function preload()
{
  boyImg=loadImage("boy.png")
}

function setup() {
	createCanvas(1360, 650);

  engine = Engine.create();
  world = engine.world;
  
	boy = createSprite(200,535);
	boy.addImage(boyImg);
  boy.scale=0.12;

  tree = new Tree(1050,365,0.1,0.1);

	ground = new Ground(650,620,1430,30);

	stone = new Stone(145,575,30);

	mango1 = new Mango(900, 300, 20);
	mango2 = new Mango(1010, 300, 20);
	mango3 = new Mango(1110, 200, 20);
	mango4 = new Mango(1000, 200, 20);
	mango5 = new Mango(1100, 290, 20);
	mango6 = new Mango(1200, 300, 20);

	slingShot = new slingshot(stone.body, {x: 140, y: 470});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("DarkSalmon");
  drawSprites();
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  slingShot.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);

  fill("white");
  textSize(40);
  textStyle(BOLD);
  textFont("segoe script");
  text("AKSHAY'S PLUCKING MANGOES 2020",250,80);

  fill("DarkMagenta");
  textSize(20);
  textStyle(BOLD);
  textFont("arial");
  text("Press SPACE to get a second chance to play !!!",80,250);
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingShot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	slingShot.attach(stone.body);
	}
  }

function detectcollision(lstone,lmango){

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
      if(distance<=lmango.r+lstone.r)
      {
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }
