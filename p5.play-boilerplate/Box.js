class Box{
    constructor(x, y, width, height, color) {
        var options = {
          'restitution' : 0.7,
          'friction' : 0.6,
          'isStatic' : false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(this.color);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}
