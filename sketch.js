
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var ground;
var score=0,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup() 
{
  
createCanvas(600,400);

ground = createSprite(300,340,1200,20);
  
monkey= createSprite(70,314,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
monkey.debug=true;


FoodGroup=new Group();
obstacleGroup=new Group();

}



function draw() 
{

background("cadetblue");


  
ground.velocityX = -4;
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
//console.log(banana.x)
if(keyDown("space") && monkey.y >= 250)
{

monkey.velocityY=-12;

}
  
if (monkey.isTouching(FoodGroup))
{
FoodGroup.destroyEach();  
score=score+1 
  
}
 





monkey.velocityY= monkey.velocityY+0.8
monkey.collide(ground)
fruit();
  

textSize(20);
fill("white")
text("score="+score,400,50)

  
  textSize(20);
  fill("black");
  survivalTime=Math.round(frameCount/10);
  text("survival time="+survivalTime,100,50);
  
drawSprites();
}


function fruit()
{
  
  if(frameCount%80===0)
{
  banana=createSprite(200,200,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1
  banana.x=Math.round(random(200,400))
  banana.velocityX=-6;
  banana.setLifetime=100;
  FoodGroup.add(banana)
}  
}



