class Box{
    constructor(x,y,width,height){
        var box_options ={
            isStatic: false
        }
    this.width=width;
    this.height=height;
        this.box = Bodies.rectangle(x,y,width,height,box_options);
        World.add(world,this.box);
    }
    display(){
        var pos=this.box.position;
        var angle=this.box.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}