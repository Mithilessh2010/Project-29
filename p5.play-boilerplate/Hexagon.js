class Hex {
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("hexagon.png");
        World.add(world,this.body);
    }
    display(){
        translate(this.body.position.x, this.body.position.y);
        console.log("X :" + this.body.position.x + ": Y" + this.body.position.y);
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,this.width,this.height);
    }

}