class Polygon {
    constructor(x, y, width, height){
      var options = {
        'friction':11,
        'stiffness':11,
        'density':2.0
      }
      this.image = loadImage ("polygon.png")
      this.body = Bodies.circle(150,200,20,options);
      this.x = x
      this.y = y
      this.width = width 
      this.height = height
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
    }
  }
  