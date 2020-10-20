class Boy
{
    constructor(x,y,width,height)
    {
       var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options)

        this.x = x;
        this.y = y;
        this.image = loadImage("sprites/boy.png")

        World.add(world,this.body)
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        strokeWeight(2)
        stroke("green")
        fill("brown")
        image(this.image,0,0,150,200)
        pop()
    }
}