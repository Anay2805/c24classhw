class Cannon {
constructor(x, y, r){

var cannon_options = {
isStatic : true
}

this.body = Bodies.circle(x, y, r)
this.r = r;
World.add(world, this.body)


}

display(){

var pos = this.body.position;

ellipseMode(RADIUS)
strokeWeight(2);
fill("orange");
ellipse(pos.x, pos.y, this.r)


}
}