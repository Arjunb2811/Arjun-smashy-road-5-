var car, ground; ground2; ground3, water, water1, water2, water3, water4, water5;

function preload(){
car1 = loadImage("car3.png")


}

function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  
  ground2 = createSprite(displayWidth/2+350, displayHeight/2,705,displayHeight)
  ground2.shapeColor=(rgb(139,69,19))
  ground3 = createSprite(displayWidth/2-350,displayHeight/2,705,displayHeight)
  ground3.shapeColor = (rgb(144,238,144))
  ground = createSprite(displayWidth/2,displayHeight/2,200,displayHeight)
  water = createSprite(displayWidth/2-200,displayHeight/2-350,100,100)
  water.shapeColor=(rgb(0,0,255))
  water1 = createSprite(displayWidth/2-400,displayHeight/2-20,100,100)
  water1.shapeColor=(rgb(0,0,255))
  water2 = createSprite(displayWidth/2-600,displayHeight/2+250,100,100)
  water2.shapeColor=(rgb(0,0,255))
  water3 = createSprite(displayWidth/2+600,displayHeight/2-360,100,100)
  water3.shapeColor=(rgb(0,0,255))
  water4 = createSprite(displayWidth/2+400,displayHeight/2-10,100,100)
  water4.shapeColor=(rgb(0,0,255))
  water5 = createSprite(displayWidth/2+200,displayHeight/2+270,100,100)
  water5.shapeColor=(rgb(0,0,255))
car = createSprite(400, 200, 50, 50);
 car.addImage(car1)
 car.velocityX = 0
 car.velocityY = 0
 
 
}

function draw() {
  background(0,0,0);  
if (keyDown("up")){
car.velocityY = -2
car.velocityX = 0 
}

if (keyWentUp("up")){
car.velocityY = 0;
car.velocityX = 0;
}

if(keyDown("down")){

  car.velocityY = 2
  car.velocityX= 0
  }
  if(keyWentUp("down")){
    car.velocityY = 0;
    car.velocityX = 0;
  }

if (keyDown("right")){
  car.velocityX = +2
  car.velocityY = 0
}  
if(keyWentUp("right")){
car.velocityX = 0;
car.velocityY = 0;

}

if (keyDown("left")){
car.velocityX = -2
car.velocityY = 0
}
if(keyWentUp("left")){
car.velocityX = 0;
car.velocityY = 0
}
if(ground.y<450){
  ground.y = ground.height/2
}

ground.velocityX= 0;
ground.velocityY = -3





  drawSprites();

}