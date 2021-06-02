var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50,290, 50, 50);
  wall=createSprite(1100,canvas.height/2,60,canvas.height/2);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);
  wall.shapeColor=color(80,80,80);  
  car.velocityX=speed;
  if(wall.x-car.x<=car.width/2+wall.width/2){
    car.x=1045;
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }else if(100<deformation<180){
      car.shapeColor=color(230,230,0);
    }else if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
  }
  drawSprites();
}