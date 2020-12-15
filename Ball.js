class Ball{
    constructor(x,y,r){

        var options = {
            'density'     : 1.5 ,
            'frictionAir' : 0.005
        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);

        this.r = r ; 

    }
    display(){

        var pos = this.body.position ;
        var angle = this.body.angle ;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}