class Ball {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.5
    }
    this.image = loadImage("ball.png")
    this. radius = radius;
    this.body = Bodies.circle(x, y,this.radius, options);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    //strokeWeight(4);
   // stroke("green");
    fill(255);
    image(this.image, 0, 0, this.radius + 50, this.radius + 50);
    pop();
  }
};
