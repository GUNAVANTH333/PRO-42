var iss,spacebg,spacecraft1,spacecraft2,spacecraft3,spacecraft4
var hasDocked=false;

function preload() {
  issImg = loadImage("iss.png");
  spacebgImg = loadImage("spacebg.jpg")
  spacecraft1Img = loadImage("spacecraft1.png")
  spacecraft2Img = loadImage("spacecraft2.png")
  spacecraft3Img = loadImage("spacecraft3.png")
  spacecraft4Img = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(1000,400);
  iss = createSprite(400,200,10,10);
  iss.addImage(issImg)
  iss.scale = 0.8

  spacecraft = createSprite(500,200,50,50)
  spacecraft.addImage(spacecraft1Img)
  spacecraft.scale=0.3

}
function draw() {
  background(spacebgImg);  

  if (!hasDocked){
    spacecraft.x=spacecraft.x+ random(-1,1)
      
      
      if(keyDown("UP_ARROW")){
        spacecraft.y=spacecraft.y-1
        spacecraft.addImage(spacecraft2Img)
      }
      
      if(keyDown("DOWN_ARROW")){
        spacecraft.y=spacecraft.y+1
        spacecraft.addImage(spacecraft1Img)
      }
      
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x=spacecraft.x+1
      spacecraft.addImage(spacecraft3Img)
    }
    
    
    
    if(keyDown("LEFT_ARROW")){
      spacecraft.x=spacecraft.x-1
      spacecraft.addImage(spacecraft4Img)
    }
    
      }
    if(spacecraft.y <= (iss.y+100) && spacecraft.x <= (iss.x-20))
    { hasDocked = true;
    textSize(25)
    fill('white')
    text("Docking Successful", 500,200)
    
    
    }
    
  drawSprites();
}
