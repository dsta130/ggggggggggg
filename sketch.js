const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObj
var world;

function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paperObj = new paper(300,600, 10);
    groundObject=new ground(width/2,670,width,20);
	dustinbinObj=new dustbin(1200,650)
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  background(0);
  paperObj.display();
  groundObject.display();
  dustbinObj.display();

  
}
