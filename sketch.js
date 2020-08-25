var car, wall;
var speed, weight;
var deformation;
var gotThere = false;
function setup(){
  createCanvas(3000,3000)
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(50,200,50,50);
  fill(255,0,0);
  wall = createSprite(1000,200,60,150);
  
}

function draw(){
  background("white");
  car.velocityX = speed;
  deformation = 0.5 * weight * speed * speed/22500;
  
  car.shapeColor = "black";
  wall.shapeColor="green";

  if(deformation < 100 && car.x > wall.x + 10) {
    fill("black");
    textSize(120);
    text("Less than 100",200,370);
    car.shapeColor = "green";
  }

  if(deformation > 100 && deformation < 180 && car.x > wall.x + 10) {
    textSize(120);
    fill("black");
    text("Between 100 and 180", 200,370);
    car.shapeColor = "yellow";
  }

  if(deformation > 180 && car.x > wall.x + 10) {
    textSize(120);
    fill("black");
    text("Greater than 180",200,370);
    car.shapeColor = "red";
  }

  if(car.x > wall.x + 50) {
    gotThere = true;
    wall.shapeColor = "orange";
  }

  if(gotThere == true) {
    car.velocityX = 0;
  }
  
  drawSprites();
}