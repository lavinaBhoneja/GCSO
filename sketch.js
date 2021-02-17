var car, wall;
var speed, weight ;

function setup(){
  createCanvas(1250, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 60, 60);
  car.velocityX = speed;

  wall = createSprite(1200, 200, 60, height/2)
  wall.shapeColor="white";
}

function draw(){
  background(0); 
  
  if(wall.x-car.x<(wall.width + car.width)/2){
    car.velocityX = 0;
    car.x = wall.x - (wall.width+car.width)/2;
    var deformation = 0.5*weight*speed*speed/25509;
    
    if(deformation>190){
      car.shapeColor = "Red";
    }
    if(deformation<188&&deformation>105){
      car.shapeColor = "Blue";
    }
    if(deformation<105){
      car.shapeColor = "PInk";
    }
  }

  drawSprites();
}