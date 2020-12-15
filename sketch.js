const World = Matter.World ;
const Engine = Matter.Engine ;
const Bodies = Matter.Bodies ;
const Body = Matter.Body ;
const Constraint = Matter.Constraint ;

var engine,world ;
var ground1 ;
var building1,building2,building3,building4,building5 ;
var ball1 ;
var rope1 ;

function setup(){

  createCanvas(1500,720);

  engine = Engine.create();
  world = engine.world ;

  ground1 = new Ground(750,700,1500,40);
  building1 = new Building(900,600,50,100);
  building2 = new Building(900,500,50,100);
  building3 = new Building(900,400,50,100);
  building4 = new Building(900,300,50,100);
  building5 = new Building(900,200,50,100);

  ball1 = new Ball(600,200,50);

  rope1 = new Rope(ball1.body,{ x:600 , y:200 });

  Engine.run(engine);

}

function draw(){
  background("lightblue");

  Engine.update(engine);

  ground1.display();
  building1.display();
  building2.display();
  building3.display();
  building4.display();
  building5.display();

  ball1.display();

  rope1.display();

  strokeWeight(10);
  line(600,200,200,670);
  rect(220,650,50,50);

  
}

function mouseDragged(){
      Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});  
}

