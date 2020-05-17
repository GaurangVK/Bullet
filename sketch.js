var wall,thickness;
var bullet,bullet_speed,bullet_weight;

function setup() {
  createCanvas(1200,400);

  thickness=random(25,85);

var wall_options={
  isStatic:true
}


  bullet=createSprite(50,150,10,15);
  wall=createSprite(1200,200,thickness,height/2,wall_options);
  

rectMode(CENTER);

  bullet_speed=random(25,85);
 bullet_weight=random(30,55);
 bullet.shapeColor="blue";
}

function draw() {
  background(0,0,0);  

 
  bullet.velocityX=bullet_speed;

if(wall.x-bullet.x<(bullet.width+wall.width))
{
bullet.velocityX=0;
var damage=0.5 *bullet_weight* bullet_speed*bullet_speed/thickness*thickness*thickness;
}

if(damage>10)
{
wall.shapeColor="red";

}
if(damage<10)
{
wall.shapeColor="green";

}

  drawSprites();
}