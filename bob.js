class Bob{
    constructor(x){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:0.8
        }
        this.body = Bodies.circle(x,height/2+140,35,options);        
        World.add(world,this.body)
    }

    display(){
        strokeWeight(5)
	    stroke(rgb(255,0,85))
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y,68,68);  //ellipse(x,y,d,d)
        stroke(0)
        ellipse(this.body.position.x-10,this.body.position.y-10,6,6);
        ellipse(this.body.position.x+10,this.body.position.y-10,6,6);
        stroke(rgb(255,0,85));
        fill("pink");
        ellipse(this.body.position.x+10,this.body.position.y+10,2,2);
        ellipse(this.body.position.x+9,this.body.position.y+11,2,2);
        ellipse(this.body.position.x+8,this.body.position.y+12,2,2);
        ellipse(this.body.position.x+7,this.body.position.y+13,2,2);
        ellipse(this.body.position.x+6,this.body.position.y+14,2,2);
        ellipse(this.body.position.x+5,this.body.position.y+15,2,2);
        ellipse(this.body.position.x+4,this.body.position.y+16,2,2);
        ellipse(this.body.position.x+3,this.body.position.y+17,2,2);
        ellipse(this.body.position.x+2,this.body.position.y+17,2,2);
        ellipse(this.body.position.x+1,this.body.position.y+17,2,2);
        ellipse(this.body.position.x+0,this.body.position.y+17,2,2);
        ellipse(this.body.position.x-1,this.body.position.y+17,2,2);
        ellipse(this.body.position.x-2,this.body.position.y+17,2,2);
        ellipse(this.body.position.x-3,this.body.position.y+17,2,2);
        ellipse(this.body.position.x-4,this.body.position.y+16,2,2);
        ellipse(this.body.position.x-9,this.body.position.y+11,2,2);
        ellipse(this.body.position.x-8,this.body.position.y+12,2,2);
        ellipse(this.body.position.x-7,this.body.position.y+13,2,2);
        ellipse(this.body.position.x-6,this.body.position.y+14,2,2);
        ellipse(this.body.position.x-5,this.body.position.y+15,2,2);
        ellipse(this.body.position.x-10,this.body.position.y+10,2,2);
    }
}/** */