var car,wall,speed,weight;
function setup() {
  createCanvas(800,400);
  car = createSprite(50,200,20,20);
  wall = createSprite(350,200,10,100);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
  if(car.isTouching(wall)){
    var deformation = 0.5*weight*speed*speed/22500;

   car.velocityX = 0;

   if(deformation<100){
     car.shapeColor = "green"
   }

   if(deformation>100 && deformation<180){
    car.shapeColor = "yellow"
  }

  if(deformation>180){
    car.shapeColor = "red"
  }

  }

  drawSprites();
}