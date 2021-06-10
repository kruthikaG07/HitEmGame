const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var player
var ball
var track
var ground
var render, engine, world;
var r1, r2, r3
var release
var score = 0
var pin1
var pin2
var pin3
var pin4
var pin5
var ballImg
var box1Img
var backgroundImg
function preload(){
  box1Img = loadImage("box1.png")
  backgroundImg = loadImage("background.jpeg")
}
function setup() {
  engine = Engine.create()
  world = engine.world;
  angleMode(RADIANS);
  createCanvas(displayWidth, 800);
  ball = new Ball(100, 100, 30)
  ground = new Ground(width / 2, 800, width, 20)
  // ramp = new Ramp(100, 100, 50, Math.PI * 0.06)
  // Matter.Body.setStatic(ramp.body, true)
  r1 = Bodies.rectangle(100, 650, 800, 20, { isStatic: true, angle: Math.PI * 0.09 })
  World.add(world, r1);
  pin1 = Bodies.rectangle(680, 650, 30, 50)
  World.add(world, pin1)
  pin2 = Bodies.rectangle(700, 650, 30, 50)
  World.add(world, pin2)
  pin3 = Bodies.rectangle(720, 650, 30, 50)
  World.add(world, pin3)
  pin4 = Bodies.rectangle(690, 620, 30, 50)
  World.add(world, pin4)
  pin5 = Bodies.rectangle(710, 620, 30, 50)
  World.add(world, pin5)
  pin6 = Bodies.rectangle(700, 590, 30, 50)
  World.add(world, pin6)
  //var options={
  //bodyA:ball,
  //bodyB:r1,
  //length:30,
  //stiffness:0.03
  //}
  // release = Constraint.create(options)
  // World.add(world,release)
  console.log(Math.PI * 0.09);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine)
  ball.display()
  // ramp.display()
  //ground.display()
  //rectMode(CENTER)
  fill("white")
  push();
  translate(r1.position.x, r1.position.y);
  rotate(PI / 9);
  rect(0, 0, 700, 20);
  pop();
  image(box1Img,pin1.position.x, pin1.position.y, 30, 50)
  image(box1Img,pin2.position.x, pin2.position.y, 30, 50)
  image(box1Img, pin3.position.x, pin3.position.y, 30, 50)
  image(box1Img, pin4.position.x, pin4.position.y, 30, 50)
  image(box1Img, pin5.position.x, pin5.position.y, 30, 50)
  image(box1Img, pin6.position.x, pin6.position.y, 30, 50)
  if (pin1.speed > 2 || pin2.speed > 2 || pin3.speed > 2 || pin4.speed > 2 || pin5.speed > 2 || pin6.speed > 2) {
    score++
  }
  fill("black")
  textSize(30);
  text("Drag it before it drops to get Maximum points", 100, 100);
  text("Score: " + score, 800, 100)
}
if (score > 100){
  textSize(30);
  text("Good Job", 400, 500)
}
function mouseDragged() {
  if (ball.body.position.y < 700 || ball.body.position.x < 200) {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }
}


function mouseReleased() {
  slingshot.fly();
}



