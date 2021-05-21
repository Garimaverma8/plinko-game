class Particle{
     
  constructor(x,y){

     var options={
        restitution: 0.2,
        friction: 0,
        isStatic: false
       
     }

     this.r = 10

    this.body = Bodies.circle(x,y,this.r,options);
    World.add(world,this.body)
    
    this.color=color(random(0,255),random(0,255),random(0,255));


    }

display(){
   var pos = this.body.position

   push();
      fill(this.color)
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.r,this.r);
   pop();

  

}


}