
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function preload()
{
	/*var ball_options={
	inStatic:false,
	restitution:0.3,
    friction:0,
	destiny:1.2*/

 
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		inStatic:false,
		restitution:0.3,
		friction:0,
		destiny:1.2
	}
	World.add(world,ball);
	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

/*Buenas Tardes me apena mucho lo que le escribo ya que al hacer de tarea me 
di cuenta de que no le entendi una parte fundametal de su trabajo se como 
hacer la roca y darle la friccion y la direccionpero no que aparesca en el 
canvas  y otra serie de errores que me aparecieron aqui le envio el trabajo 
que logre hacer y corregi un par de errores perdon. */

