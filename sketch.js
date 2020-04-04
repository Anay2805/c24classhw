
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
 
var ground, base1, base2, cannon, shootball;

 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
     
      shootball = new Shotball(120, 270, 60, 40, -PI/5)
      base1 = new Base(75, 370, 150, 20);
      base2 = new Base(75, 350, 150, 20);
      ground = new Ground(200, 390, 400, 20);
      cannon =  new Cannon(75,330,70);
}
 

function draw() {
    // Draw all the elements including the slider that 

    background(255);
 
    shootball.display();
    cannon.display();
    ground.display();
    base1.display();
    base2.display();

}
 


