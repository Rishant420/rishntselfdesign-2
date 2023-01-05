var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ninja , ninja_running , ninja_collided,ninja_jumping
var bg , in_ground

var ob1 , ob2 , score=0

var gameOver
var checkPointSound

function preload(){
ninja_running = loadAnimation ("Images/R-1.png","Images/R-2.png" , "Images/R-3.png"  )
ninja_collided = loadAnimation ("Images/R-4.png");
ninja_jumping = loadAnimation("Images/J-1.png","Images/J-2.png","Images/J-3.png","Images/J-4.png")

bgImage = loadImage ("Images/BG-1.jpg");

ob1 = loadImage ("Images/Plat 2.png")
ob2 = loadImage ("Images/plat 3.png")

gameoverImg = loadImage ("Images/plate.png")
restartImg = loadImage  ("Images/restart.png")

}

function setup() {
 createCanvas (1280,640);

  bg = createSprite(640,180,1280,20);
  bg.addImage("Images/bg",bgImage);
  //bg.x = bg.width/2-50;

 ninja = createSprite(80,300,20,50);
 ninja.addAnimation("running",ninja_running);
 ninja.addAnimation("collided",ninja_collided);
 ninja.addAnimation()
 ninja.scale = 1.5;
 ninja.velocityX = 5;
 


  
  gameover = createSprite(300,100);
  gameover.addImage(gameoverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
 gameover.scale = 0.8;
  restart.scale = 0.67;
  
 // invisibleGround = createSprite(200,190,400,10);
//  invisibleGround.visible = false;

  obGroup = createGroup();
  
}

 function draw(){ 
    
  //

   //if(gameState === PLAY){
  
     gameover.visible = false;
     restart.visible = false;
      
     bg.velocityX = -2
      
      score = score + Math.round(getFrameRate()/60);
      
      if(score>0 && score%100 === 0){
         checkPointSound.play() 
      }
      
    if (bg.x < 0 ){
        bg.x = 600;
      }
      
      
     /* if(keyDown("space")&& ninja.y >= 100) {
          ninja.velocityY = -12;
          
      }*/
      
    
   //   ninja.velocityY = ninja.velocityY + 0.8
//}
  drawSprites()
  textSize(20)
 text("Score: "+ score, 500,50);

}
 //spawnObsgroup();
/*if(obGroup.isTouching(ninja)){
    
    
    gameState = END;
    
}
else if (gameState === END) {
    gameOver.visible = true;
   restart.visible = true;
   
}
    ninja.changeAnimation("collided", ninja_collided);
  
   
   
    bg.velocityX = 0;
    ninja.velocityY = 0

    obGroup.setLifetimeEach(-1);
    
     obGroup.setVelocityXEach(0);
       
     ninja.collide(invisibleGround);
  
     if(mousePressedOver(restart)) {
         reset();
       }
   
   
     drawSprites();
   
   function reset(){
    gameState= PLAY;
  gameOver.visible = false
  restart.visible= false
  obGroup.destroyEach()
  
  score = 0
  ninja.changeAnimation("running", ninja_running);
  }
  function spawnObstacles(){
    if (frameCount % 60 === 0){
      var ob = createSprite(1280,165,10,40);
      ob.velocityX = -(6 + score/100);
      
       //generate random obstacles
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: ob.addImage(ob1);
                 break;
         case 2: ob.addImage(ob2);

       }
    }
}
ob.scale = 0.7;
obstacle.lifetime = 540;

obsGroup.add(ob);*/

