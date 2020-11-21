// Creating Tree class
class Tree 
{
    constructor(x,y,width,height)
    {
    var options = {
        isStatic:true,
        restitution:2,
        friction:1.5,
        density:1.2
    }        
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.image = loadImage("tree.png");
    World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
            push()
			translate(pos.x, pos.y);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,500,500)
			pop()
    }
}