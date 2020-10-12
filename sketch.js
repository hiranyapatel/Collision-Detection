var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
 fixedRect=createSprite(200, 200, 50, 100);
fixedRect.shapeColor="lightgreen";
movingRect=createSprite(400, 400, 100, 50);
movingRect.shapeColor="lightgreen";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x)
  console.log(fixedRect.width/2+movingRect.width/2)
  if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2
    ){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="yellow"
  }else {
    movingRect.shapeColor="lightGreen";
    fixedRect.shapeColor="lightGreen";
  }
  drawSprites();
}