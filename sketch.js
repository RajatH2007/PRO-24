const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,rubber,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(400,590,50);
    iron = new Iron(600,400,60,50);
    stone1 = new Stone(500,590,2,2);
    stone2 = new Stone(500,590,2,2);
    stone3 = new Stone(500,590,2,2);
    stone4 = new Stone(500,590,2,2);
    stone5 = new Stone(500,590,2,2);
    stone6 = new Stone(500,590,2,2);
    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    iron.display();
 
}