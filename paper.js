class paper
{

    constructor(x,y,w,h){

        var options={
            'density': 1.2,
            'restitution':0.3,
            'friction': 0
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.y,options)

        World.add(world, this.body);
    }

    display(){

       var paperPos = this.body.position;

        push()
        translate(paperPos.x, paperPos.y);
        imageMode(CENTER);
        stroke ("gery");
        fill ("lightgrey");
        image(this.image,0,0,this.w,this.h);
        pop ()

        }
    
}