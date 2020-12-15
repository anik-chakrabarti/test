class Ground{
    constructor(x,y,w,h){

        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(world,this.body);

        this.h = h ;
        this.w = w ; 

    }
    display(){

        var pos = this.body.position ;

        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.w,this.h);

    }
}