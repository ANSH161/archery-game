const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var canvas;

var playerock; 



var comprock;

var human;

var human2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
 comprock = new comprock(300,random(450,height - 300),180,150)

   //Create 
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);



  comprock.display();



   //Display Playerbase and computer base 


   //display Player and computerplayer






}
