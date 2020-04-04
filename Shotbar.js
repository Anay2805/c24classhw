class Shotball {
    constructor(x, y, height, angle) {
      var options = {
      isStatic : true
      }
      this.body = Bodies.rectangle(x, y, 60, height, options);
      this.width = 60;
      this.height = height;
      
     Matter.Body.setAngle(this.body, angle);


      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);// change the 
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3); // making boundaries
      stroke("black")// colour of boundaries
      
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
      
    }
  };