class Building{
    constructor(x,y,w,h){

        var options = {
            'restitution' : 0.8 ,
            'density'     : 1.0 ,
            'friction'    : 1.0
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);

        this.h = h ;
        this.w = w ; 

    }
    display(){

        var pos = this.body.position ;
        var angle = this.body.angle ;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("yellow");
        strokeWeight(7);
        fill("blue");
        rect(0,0,this.w,this.h);
        pop();
    }
}