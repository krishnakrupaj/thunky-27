const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5
var roof,button,bf


function preload()
{
	
}

function setup() {
	createCanvas(windowWidth-10,windowHeight-10);
	B1 = createButton('BOB 1')
	B1.position(width-100,height-100)
	b1=()=>{
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-30 ,y:-30})}
	B2 = createButton('BOB 1&2')
	B2.position(width-100,height-150)
	b2=()=>{
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-40 ,y:-40});
	Matter.Body.applyForce(bob2.body, bob2.body.position, {x:-40 ,y:-40})}
	B3 = createButton('BOB 1,2&3')
	B3.position(width-100,height-200)
	b3=()=>{
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50 ,y:-50});
	Matter.Body.applyForce(bob2.body, bob2.body.position, {x:-50 ,y:-50});
	Matter.Body.applyForce(bob3.body, bob3.body.position, {x:-50 ,y:-50})}
	
	engine = Engine.create();
	world = engine.world;

	var pos=Body.position

	//Create the Bodies Here.
	roof = new Ground(width/2,height/4,370,20);
	
	bob1 = new Bob(width/2-140);
	bob2 = new Bob(width/2-70);
	bob3 = new Bob(width/2);//
	bob4 = new Bob(width/2+70);
	bob5 = new Bob(width/2+140);
	
	rope1 = new Rope(bob1.body,roof.body,-140);
	rope2 = new Rope(bob2.body,roof.body,-70);
	rope3 = new Rope(bob3.body,roof.body,0);
	rope4 = new Rope(bob4.body,roof.body,+70);
	rope5 = new Rope(bob5.body,roof.body,+140);
	Engine.run(engine)
  
}


function draw() {
	
Engine.update(engine)	
rectMode(CENTER);
background("black");

B1.mousePressed(b1);
B2.mousePressed(b2);
B3.mousePressed(b3);

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

noStroke()

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display(); 

 noStroke()
  fill("aqua");
    textSize(50);
    textFont("Times New Roman");
    text("NEWTON'S CRADLE",(width/2)-225+12.5, 60);//700-125=575

}

/*function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-125 ,y:-125 })
	}
}*/