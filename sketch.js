
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world,engine;
var paperObject, dustbinObject, groundObject;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject  = new Paper(200,450,50);
	dustbinObject = new Dustbin(1200, 650);
	groundObject = new Ground(width/2, 670, width, 20);
	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background("white");

  paperObject.display();
  groundObject.display();
  dustbinObject.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW){
		Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-45});
	}
}
