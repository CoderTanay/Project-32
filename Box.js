class Box {
  constructor(x, y, width, height){
    var options = {
      'friction':2,
      'stiffness':2,
      'density':1.0
    }
    this.Visiblity = 255;
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  score(){
    if(this.visiblity<0 && this.visiblity>-10){
      score++;
    }
  }

  display(){
    if (this.body.speed < 3){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    } else {
        World.remove(world,this.body)
        push();
        this.visibility = this.visibility - 10;
        pop();
    }
  }
}
