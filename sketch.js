//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //Create the Physics Engine & Game world
  myEngine = Engine.create(); //myEngine.world
  myWorld = myEngine.world;
  

  //Create ground
  var ground_options = {
    isStatic : true
    
  }
  ground = Bodies.rectangle(200,390,400,20, ground_options);
  World.add(myWorld,ground);

  //Create ball body
  var ball_options = {
    restitution : 1.0
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);


  console.log(ball);

  
}

function draw() {
  background("black");

  Engine.update(myEngine);

  fill("brown");
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);


  fill ("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}