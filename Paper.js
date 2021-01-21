class Paper {
    constructor(xPos, yPos,radius) {
        var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
        }
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
        this.image = loadImage('paper.png')
        this.body=Bodies.circle(this.xPos,this.yPos,(this.radius-20)/2,options);

        
        
        World.add(world,this.body);
    }

    display(){
        var paperPos=this.body.position;
       
       //strokeWeight(0);
        //fill('blue')
        push();
        rectMode(CENTER);
        translate(paperPos.x, paperPos.y);
        //circle(0,0);
        imageMode(CENTER)
        image(this.image,0,0,this.radius*1.5,this.radius*1.5)
        pop();
    }
};  