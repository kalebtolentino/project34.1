const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball1, ballChain1;
var box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
/*
  box1 = new Box(400,320,50,50);
  box2 = new Box(400,270,50,50);
  box3 = new Box(400,220,50,50);
  box4 = new Box(400,170,50,50);
  box5 = new Box(400,120,50,50);
  box6 = new Box(350,320,50,50);
  box7 = new Box(350,270,50,50);
  box8 = new Box(350,220,50,50);
  box9 = new Box(350,170,50,50);
  box10 = new Box(350,120,50,50);
*/ 
  ball1 = new Ball(200,200);
  ballChain1 = new Ballchain(ball1.body,{x:200, y:0});
  ball2 = new Ball(250,200);
  ballChain2 = new Ballchain(ball2.body,{x:250, y:0});
  ball3 = new Ball(300,200);
  ballChain3 = new Ballchain(ball3.body,{x:300, y:0});
  ball4 = new Ball(350,200);
  ballChain4 = new Ballchain(ball4.body,{x:350, y:0});
  ball5 = new Ball(400,200);
  ballChain5 = new Ballchain(ball5.body,{x:400, y:0});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  
  
  
/*
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
*/
  ball1.display();
  ballChain1.display();
  ball2.display();
  ballChain2.display();
  ball3.display();
  ballChain3.display();
  ball4.display();
  ballChain4.display();
  ball5.display();
  ballChain5.display();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
  //}
}