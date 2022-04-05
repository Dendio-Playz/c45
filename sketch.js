var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
    bgImg = loadImage("assets/bg.png")
    restartImg = loadImage("assets/restart.png");
    bottom1Img = loadImage("assets/obsBottom1.png");
    bottom2Img = loadImage("assets/obsBottom2.png");
    bottom3Img = loadImage("assets/obsBottom3.png");
    balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
    top1Img = loadImage("assets/obsTop1.png");
    top2Img = loadImage("assets/obsTop2.png");
   
}

function setup(){

//background image
    bg = createSprite(165,485,1,1);
    bg.addImage(bgImg);
    bg.scale = 1.3

    //creating top and bottom grounds
    bottomGround = createSprite(200,390,800,20);
    bottomGround.visible = false;

    topGround = createSprite(200,10,800,20);
    topGround.visible = false;
          
    //creating balloon     
    balloon = createSprite(100,200,20,50);
    balloon.addAnimation("balloon",balloonImg);
    balloon.scale = 0.2;

    //create bottom buildings





}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
          spawnObstacleTop();
        drawSprites();
        
}

function spawnObstacleTop(){
  if(World.frameCount % 60 === 0){
    var obstacleTop = createSprite(400,50,40,50);
    //obstacleTop.addImage(top1Img);
    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4
    obstacleTop.y = Math.round(random(10,200));

    var rand = Math.round(random(1,2));
    switch(rand){
      case 1:obstacleTop.addImage(top1Img);
      break;
      case 2:obstacleTop.addImage(top2Img);
      break;
      default:
      break;
    }
  }

}