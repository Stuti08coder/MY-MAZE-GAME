var wall, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8 ,wall9, wall10, wall11, wall12, wall13, wall14, wall16, wall15 ,wall17, wall18, wall19, wall20;
var wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29,wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40;
var wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50, wall51, wall52, wall53, wall54, wall55, wall56, wall57, wall58, wall59, wall60;
var wall61, wall62, wall63, wall64, wall65, wall66, wall67, wall68, wall69, wall70, wall71, wall72, wall73, wall74, wall75, wall76, wall77, wall78, wall79, wall80;
var wall81, wall82, wall83, wall84, wall85, wall86, wall87, wall88, wall89, wall90, wall91, wall92, wall93, wall94, wall95, wall96, wall97, wall98, wall99, wall100;
var player1;

var redGrp;
var collideGrp;
var coin;
var coinImg, player1Img;
var greenGrp;
var blackGrp;
var score = 0;
var fire3Img, fire3Imgver;
var fire4Img, fire4Imgver;
var fire5Imgver, fire5Img;
var fire2Img, fire2Imgver;
var money2Img, money2Imgver;
var money3Img, money3Imgver;
var bat2Img, bat2Imgver;
var bat3Img, bat3Imgver;
var bush2Img, bush2Imgver;
var bush3Img, bush3Imgver;
var bush4Img, bush4Imgver;
var bush5Img, bush5Imgver;
var finishblock1, finishblock2, finishblock3;
var greenblock1, greenblock2, greenblock3;
var blackblock1, blackblock2, blackblock3;
var player2Imghor;




function preload(){

coinImg = loadImage("images/coin.png")
player1Img = loadImage("images/player1.png")
fire3Img = loadImage("images/fire3.png")
fire3Imgver = loadImage("images/fire3i.png")
fire4Img = loadImage("images/fire4.png")
fire4Imgver = loadImage("images/fire4i.png")
fire5Img = loadImage("images/fire5.png")
fire5Imgver = loadImage("images/fire5i.png")
fire2Img = loadImage("images/fire2.png")
fire2Imgver = loadImage("images/fire2i.png")
money2Img = loadImage("images/money2.png")
money2Imgver = loadImage("images/money2i.png")
money3Img = loadImage("images/money3.png")
money3Imgver = loadImage("images/money3i.png") 
bat2Img = loadImage("images/bat2.png")
bat2Imgver = loadImage("images/bat2i.png")
bat3Img = loadImage("images/bat3.png")
bat3Imgver = loadImage("images/bat3i.png")
bush2Img = loadImage("images/bush2.png")
bush2Imgver = loadImage("images/bush2i.png")
bush3Img = loadImage("images/bush3.png")
bush3Imgver = loadImage("images/bush3i.png")
bush4Img = loadImage("images/bush4.png")
bush4Imgver = loadImage("images/bush4i.png")
bush5Img = loadImage("images/bush5.png")
bush5Imgver = loadImage("images/bush5i.png")
player2Imghor = loadImage("images/player2.png")




}

function setup(){

createCanvas(windowWidth, windowHeight);

player1 = createSprite(785,360,20,20)

player1.addImage("player1Img",player1Img)
player1.scale = 0.13

redGrp = createGroup()
greenGrp = createGroup()
blackGrp = createGroup()
collideGrp = createGroup()
wall()
player1.setCollider("circle",0,0,150)

// for(var i = -400; i<windowHeight*1.3;i++  ){
//   spawnCoins(i)
//   i=i+100

// }
 if(player1.isTouching(blackGrp)){
  
  score = score-2
  
  }


}

function draw(){
  background("white");

text(mouseX + ","+ mouseY,mouseX,mouseY)

text("START", windowWidth/2, windowHeight/2)
text("FINISH", 700, -600 )
text("Score:" +score, 100, 380)

// finishblock()

if(wall13.isTouching(player1)||player1.isTouching(wall13)||player1.isTouching(wall23)||player1.isTouching(wall33)||player1.isTouching(wall43)||player1.isTouching(wall53)||player1.isTouching(wall63)||player1.isTouching(wall73)||player1.isTouching(wall83)||player1.isTouching(wall93)){
  score = score+1
 }

 if(wall18.isTouching(player1)||player1.isTouching(wall18)||player1.isTouching(wall24)||player1.isTouching(wall28)||player1.isTouching(wall38)||player1.isTouching(wall48)||player1.isTouching(wall58)||player1.isTouching(wall68)||player1.isTouching(wall78)||player1.isTouching(wall88)){

  score = score-2   
 }



// if(coin.isTouching(player1)){

// score = score+1
// coin.destroy()
// console.log("working")
// }

// if(player1.isTouching(redGrp)){
// player1.x = windowWidth/2
// player1.y = windowHeight/2
// player1.velocityX = 0
// player1.velocityY = 0
// }


// if(collideGrp.isTouching(player1)){
//   player1.x+=22;
//   player1.collide(collideGrp)
// }

keyMove();
drawSprites();
  
}


function keyMove(){



if(player1.y<windowWidth){
 camera.position.y = player1.y
}

if(keyDown(38)){
 
  player1.velocityY = -10
  
  }
  if(keyWentUp(38)){
   
     player1.velocityY = 0
  }
     


     
if(keyDown(40)){
player1.velocityY = 10

}


if(keyWentUp(40)){
  player1.velocityY = 0
  }

if(keyDown(37)){
  player1.velocityX = -10


  }

  if(keyWentUp(37)){
    player1.velocityX = 0
  
    }


  if(keyDown(39)){

    player1.velocityX = 10
    }  

    if(keyWentUp(39)){

      player1.velocityX =0
      }  

  }
// function finishblock(){
// if(frameCount%80===0){


//   var x = Math.round(random(10,700))
//   var y = Math.round(random(500,-400))


// }
//   finishblock1 = createSprite(x,y, 70, 30)
//   finishblock1.addImage("img", player2Imghor)
//   finishblock1.scale = 0.1
//   finishblock1.lifetime = 80
  

//   // finishblock2 = createSprite(670, -610, 30, 60)
//   // finishblock3 = createSprite(770, -610, 30, 60)
  
//   // finishblock1.shapeColor = "purple"  
//   // finishblock2.shapeColor = "purple"
//   // finishblock3.shapeColor = "purple"

// }



// function spawnCoins(m){


//   for(var i=0; i<windowWidth-200;i= i+550){  

//     var y = Math.round(random(5,700))
//    i=i+y;
//     coin = createSprite(i,m,30,30)
//     coin.addImage("coinImg",coinImg)
//     coin.scale = 0.09
//   }

// }



























function wall(){

wall= createSprite(150,-390,140,40)
wall.addImage("fireImg",fire3Img)
wall.scale = 0.8
wall1= createSprite(70,-300,40,140)
wall1.addImage("bushImg", bush2Imgver)
wall1.scale = 0.45
wall2= createSprite(210,-200,40,130)
wall2.addImage("bushImg", bush2Imgver)
wall2.scale = 0.45
wall3= createSprite(360,-330,190,40)
wall3.addImage("moneyImg",money2Img)
wall3.scale = 0.6
wall4= createSprite(450,-210,170,40)
wall4.addImage("bushImg", bush3Img)
wall4.scale = 0.45
wall5= createSprite(70,-80,40,150)
wall5.addImage("fireImgver",fire3Imgver)
wall5.scale = 0.8
wall7= createSprite(120,20,120,40)
wall7.addImage("bushImg", bush2Img)
wall7.scale = 0.45
wall8= createSprite(355,-10,40,40)
wall8.addImage("batImg",bat2Imgver)
wall8.scale = 0.6
wall9= createSprite(240,130,40,120)
wall9.addImage("bushImg", bush2Imgver)
wall9.scale = 0.45
wall10= createSprite(70,220,40,260)
wall10.addImage("fire4Imgver",fire4Imgver)
wall10.scale = 0.7
wall11= createSprite(180,290,220,40)
wall11.addImage("bushImg", bush3Img)
wall11.scale = 0.45
wall13= createSprite(620,-390,230,40)
wall13.addImage("moneyImg",money3Img)
wall13.scale= 0.6
wall14= createSprite(650,-300,40,140)
wall14.addImage("bushImg", bush2Imgver)
wall14.scale = 0.45
wall15= createSprite(560,-100,250,40)
wall15.addImage("fire4Img",fire4Img)
wall15.scale = 0.7
wall16= createSprite(700,-65,40,110)
wall16.addImage("bushImg", bush2Imgver)
wall16.scale = 0.45
wall17= createSprite(910,-390,150,40)
wall17.addImage("bushImg", bush3Img)
wall17.scale = 0.45
wall18= createSprite(810,-220,40,150)
wall18.addImage("batImg",bat3Imgver)
wall18.scale = 0.6
wall20= createSprite(400,230,40,300)
wall20.addImage("fireImg",fire4Imgver)
wall20.scale = 0.7
wall21= createSprite(440,380,120,40)
wall21.addImage("bushImg", bush2Img)
wall21.scale = 0.45
wall22= createSprite(260,430,40,90)
wall22.addImage("bushImg" ,bush2Imgver)
wall22.scale = 0.45
wall23= createSprite(845,-130,110,40)
wall23.addImage("moneyImg",money2Img)
wall23.scale = 0.6
wall24= createSprite(1350,-280,40,50)
wall24.addImage("batImg", bat3Img)
wall24.scale = 0.6
wall25= createSprite(550,230,80,40)
wall25.addImage("fireImg",fire2Img)
wall25.scale = 0.6
wall26= createSprite(680,300,100,40)
wall26.addImage("bushImg", bush2Img)
wall26.scale = 0.45
wall27= createSprite(670,100,250,40)
wall27.addImage("bushImg", bush3Img)
wall27.scale = 0.45
wall28= createSprite(785,140,40,110)
wall28.addImage("batImg",bat2Imgver)
wall28.scale = 0.6
wall29= createSprite(640,590,110,40)
wall29.addImage("bushImg", bush2Img )
wall29.scale = 0.45
wall30= createSprite(1480,650,40,200)
wall30.addImage("fireImg",fire4Imgver)
wall30.scale = 0.7
wall31= createSprite(1150,300,110,40)
wall31.addImage("bushImg", bush4Img)
wall31.scale = 0.45
wall32= createSprite(820,605,40,270)
wall32.addImage("bushImg", bush3Imgver)
wall32.scale = 0.45
wall33= createSprite(1060,-50,220,40)
wall33.addImage("moneyImg",money3Img)
wall33.scale = 0.6
wall34= createSprite(1160,-300,40,200)
wall34.addImage("bushImg",bush3Imgver)
wall34.scale =0.45
wall35= createSprite(1160,-200,250,40)
wall35.addImage("fireImg",fire4Img)
wall35.scale = 0.7
wall36= createSprite(1360,-380,150,40)
wall36.addImage("bushImg", bush3Img)
wall36.scale = 0.45
wall37= createSprite(1475,-280,40,190)
wall37.addImage("bushImg", bush3Imgver)
wall37.scale = 0.45
wall38= createSprite(550,75,40,90)
wall38.addImage("batImg",bat2Imgver)
wall38.scale = 0.6
wall40= createSprite(550,490,70,40)
wall40.addImage("fireImg",fire2Img)
wall40.scale = 0.6
wall41= createSprite(950,-5,40,130)
wall41.addImage("bushImg", bush2Imgver)
wall41.scale = 0.45
wall42= createSprite(910,250,40,150)
wall42.addImage("bushImg", bush2Imgver)
wall42.scale = 0.45
wall43= createSprite(1330,20,40,180)
wall43.addImage("moneyImg",money3Imgver)
wall43.scale = 0.6
wall44= createSprite(1280,130,150,40)
wall44.addImage("bushImg", bush2Img)
wall44.scale = 0.45
wall45= createSprite(970,170,140,40)
wall45.addImage("fireIng", fire3Img)
wall45.scale = 0.8
wall46= createSprite(1140,230,40,120)
wall46.addImage("bushImg", bush2Imgver)
wall46.scale = 0.45
wall48= createSprite(1390,280,40,140)
wall48.addImage("batImg",bat2Imgver)
wall48.scale = 0.6
wall49= createSprite(1370,-80,90,40)
wall49.addImage("bushImg", bush2Img)
wall49.scale = 0.45
wall50= createSprite(1430,340,60,40)
wall50.addImage("fireImg",fire2Img)
wall50.scale = 0.6
wall51= createSprite(1460,50,90,40)
wall51.addImage("bushImg", bush2Img)
wall51.scale = 0.45
wall53= createSprite(1270,460,40,180)
wall53.addImage("moneyImg",money3Imgver)
wall53.scale = 0.6
wall54= createSprite(1320,550,140,40)
wall54.addImage("bushImg", bush2Img)
wall54.scale = 0.45
wall55= createSprite(320,490,180,40)
wall55.addImage("fireImg",fire3Img)
wall55.scale = 0.8
wall56= createSprite(70,520,40,190)
wall56.addImage("bushImg", bush3Imgver)
wall56.scale = 0.45
wall58= createSprite(620,350,40,120)
wall58.addImage("batImg",bat3Imgver)
wall58.scale = 0.6
wall59= createSprite(900,490,150,40)
wall59.addImage("bushImg", bush2Img)
wall59.scale = 0.45
wall60= createSprite(955,450,40,60)
wall60.addImage("fireImg",fire2Imgver)
wall60.scale = 0.6
wall61= createSprite(1100,490,140,40)
wall61.addImage("bushImg", bush2Img)
wall61.scale = 0.45
wall62= createSprite(1100,560,40,160)
wall62.addImage("bushImg", bush2Imgver)
wall62.scale = 0.45
wall63= createSprite(480,590,40,150)
wall63.addImage("moneyImg",money2Imgver)
wall63.scale = 0.6
wall64= createSprite(415,650,140,40)
wall64.addImage("bushImg", bush3Img)
wall64.scale = 0.45
wall65= createSprite(120,625,150,40)
wall65.addImage("fireImg",fire3Img)
wall65.scale = 0.8
wall66= createSprite(780,0,140,40)
wall66.addImage("bushImg", bush2Img)
wall66.scale = 0.45
wall67= createSprite(960,-290,40,100)
wall67.addImage("bushImg", bush2Imgver)
wall67.scale = 0.45
wall68= createSprite(1090,90,120,40)
wall68.addImage("batImg",bat2Img)
wall68.scale = 0.6
wall69= createSprite(1420,440,100,40)


wall70= createSprite(1350,210,100,40)
wall70.addImage("fireImg",fire2Img)
wall70.scale = 0.6
wall71= createSprite(700,580,40,200)


wall72= createSprite(230,750,40,150)


wall73= createSprite(950,640,140,40)
wall73.addImage("moneyImg",money2Img)
wall73.scale = 0.6
wall74= createSprite(1390,730,140,40)
wall75= createSprite(150,770,140,40)
wall75.addImage("fireImg",fire3Img)
wall75.scale = 0.8
wall76= createSprite(470,770,290,40)
wall77= createSprite(595,810,40,50)
wall78= createSprite(1220,720,40,20)
wall79= createSprite(100,950,40,120)
wall80= createSprite(160,1000,100,40)
wall80.addImage("fireImg",fire2Img)
wall80.scale = 0.6
wall81= createSprite(1220,670,40,120)
wall82= createSprite(1000,690,40,60)
wall83= createSprite(320,1000,40,120)
wall83.addImage("moneyImg",money2Imgver)
wall83.scale = 0.6
wall84= createSprite(420,1050,240,40)
wall85= createSprite(430,900,40,140)
wall85.addImage("fireImg",fire2Imgver)
wall85.scale = 0.6
wall86= createSprite(480,950,90,40)
wall87= createSprite(100,1000,40,140)
wall88= createSprite(1100,790,200,40)
wall88.addImage("batImg",bat3Img)
wall88.scale = 0.6
wall89= createSprite(1180,830,40,40)
wall90= createSprite(1310,880,40,120)
wall90.addImage("fireImg",fire2Imgver)
wall90.scale = 0.6
wall91= createSprite(1335,950,90,40)
wall92= createSprite(1480,950,40,140)
wall93= createSprite(990,950,40,200)
wall93.addImage("moneyImg",money3Img)
wall93.scale = 0.6
wall94= createSprite(1100,1000,180,40)
wall95= createSprite(710,880,40,200)
wall95.addImage("fireImg",fire3Imgver)
wall95.scale = 0.8
wall96= createSprite(720,1040,140,40)
wall97= createSprite(910,900,140,40)

//boundries

wall98 = createSprite(790, 420, 70, 30)
wall99 = createSprite(740, 380, 30, 60)
wall100 = createSprite(840, 380, 30, 60)

wall98.shapeColor = "purple"
wall99.shapeColor = "purple"
wall100.shapeColor = "purple"

collideGrp.add(wall)
collideGrp.add(wall1)
collideGrp.add(wall2)
collideGrp.add(wall3)
collideGrp.add(wall4)
collideGrp.add(wall5)
// collideGrp.add(wall6)
collideGrp.add(wall7)
collideGrp.add(wall8)
collideGrp.add(wall9)
collideGrp.add(wall10)
collideGrp.add(wall11)
// collideGrp.add(wall12)
collideGrp.add(wall13)
collideGrp.add(wall14)
collideGrp.add(wall15)
collideGrp.add(wall16)
collideGrp.add(wall17)
collideGrp.add(wall18)
// collideGrp.add(wall19)
collideGrp.add(wall20)
collideGrp.add(wall21)
collideGrp.add(wall22)
collideGrp.add(wall23)
collideGrp.add(wall24)
collideGrp.add(wall25)
collideGrp.add(wall26)
collideGrp.add(wall27)
collideGrp.add(wall28)
collideGrp.add(wall29)
collideGrp.add(wall30)
collideGrp.add(wall31)
collideGrp.add(wall32)
collideGrp.add(wall33)
collideGrp.add(wall34)
collideGrp.add(wall35)
collideGrp.add(wall36)
collideGrp.add(wall37)
collideGrp.add(wall38)
// collideGrp.add(wall39)
collideGrp.add(wall40)
collideGrp.add(wall41)
collideGrp.add(wall42)
collideGrp.add(wall43)
collideGrp.add(wall44)
collideGrp.add(wall46)
collideGrp.add(wall45)
// collideGrp.add(wall47)
collideGrp.add(wall48)
collideGrp.add(wall49)
collideGrp.add(wall50)
collideGrp.add(wall51)
// collideGrp.add(wall52)
collideGrp.add(wall53)
collideGrp.add(wall54)
collideGrp.add(wall55)
collideGrp.add(wall56)
// collideGrp.add(wall57)
collideGrp.add(wall58)
collideGrp.add(wall59)
collideGrp.add(wall60)
collideGrp.add(wall61)
collideGrp.add(wall62)
collideGrp.add(wall63)
collideGrp.add(wall65)
collideGrp.add(wall66)
collideGrp.add(wall67)
collideGrp.add(wall68)
collideGrp.add(wall69)
collideGrp.add(wall70)
collideGrp.add(wall71)
collideGrp.add(wall72)
collideGrp.add(wall73)
collideGrp.add(wall74)
collideGrp.add(wall75)
collideGrp.add(wall76)
collideGrp.add(wall77)
collideGrp.add(wall78)
collideGrp.add(wall79)
collideGrp.add(wall80)
collideGrp.add(wall81)
collideGrp.add(wall82)
collideGrp.add(wall83)
collideGrp.add(wall84)
collideGrp.add(wall85)
collideGrp.add(wall86)
collideGrp.add(wall87)
collideGrp.add(wall88)
collideGrp.add(wall89)
collideGrp.add(wall90)
collideGrp.add(wall91)
collideGrp.add(wall92)
collideGrp.add(wall93)
collideGrp.add(wall94)
collideGrp.add(wall95)
collideGrp.add(wall96)
collideGrp.add(wall97)
collideGrp.add(wall98)
collideGrp.add(wall99)
collideGrp.add(wall100)
wall.shapeColor = "red"
redGrp.add(wall)


wall5.shapeColor = "red"
redGrp.add(wall5)
wall10.shapeColor = "red"
redGrp.add(wall10)
wall15.shapeColor = "red"
redGrp.add(wall15)
wall20.shapeColor = "red"
redGrp.add(wall20)
wall25.shapeColor = "red"
redGrp.add(wall25)
wall30.shapeColor = "red"
redGrp.add(wall30)
wall35.shapeColor = "red"
redGrp.add(wall35)
wall40.shapeColor = "red"
redGrp.add(wall40)
wall45.shapeColor = "red"
redGrp.add(wall45)
wall50.shapeColor = "red"
redGrp.add(wall50)
wall55.shapeColor = "red"
redGrp.add(wall55)
wall60.shapeColor = "red"
redGrp.add(wall60)
wall65.shapeColor = "red"
redGrp.add(wall65)
wall70.shapeColor = "red"
redGrp.add(wall70)
wall75.shapeColor = "red"
redGrp.add(wall75)
wall80.shapeColor = "red"
redGrp.add(wall80)
wall85.shapeColor = "red"
redGrp.add(wall85)
wall90.shapeColor = "red"
redGrp.add(wall90)
wall95.shapeColor = "red"
redGrp.add(wall95)



wall3.shapeColor = "green"
greenGrp.add(wall3)
wall13.shapeColor = "green"
greenGrp.add(wall13)
wall23.shapeColor = "green"
greenGrp.add(wall23)
wall33.shapeColor = "green"
greenGrp.add(wall33)
wall43.shapeColor = "green"
greenGrp.add(wall43)
wall53.shapeColor = "green"
greenGrp.add(wall53)
wall63.shapeColor = "green"
greenGrp.add(wall63)
wall73.shapeColor = "green"
greenGrp.add(wall73)
wall83.shapeColor = "green"
greenGrp.add(wall83)
wall93.shapeColor = "green"
greenGrp.add(wall93)

wall8.shapeColor = "black"
blackGrp.add(wall8)
wall18.shapeColor = "black"
blackGrp.add(wall18)
wall28.shapeColor = "black"
blackGrp.add(wall28)
wall38.shapeColor = "black"
blackGrp.add(wall38)
wall48.shapeColor = "black"
blackGrp.add(wall48)
wall58.shapeColor = "black"
blackGrp.add(wall58)
wall68.shapeColor = "black"
blackGrp.add(wall68)
wall78.shapeColor = "black"
blackGrp.add(wall78)
wall88.shapeColor = "black"
blackGrp.add(wall88)
wall24.shapeColor = "black"
blackGrp.add(wall24)


wall1.shapeColor = "pink"
wall2.shapeColor = "pink"
wall4.shapeColor = "pink"
// wall6.shapeColor = "pink"
wall7.shapeColor = "pink"
wall9.shapeColor = "pink"
wall11.shapeColor = "pink"
// wall12.shapeColor = "pink"
wall14.shapeColor = "pink"
wall16.shapeColor = "pink"
wall17.shapeColor = "pink"
// wall19.shapeColor = "pink"
wall21.shapeColor = "pink"
wall22.shapeColor = "pink"
// wall24.shapeColor = "pink"
wall26.shapeColor = "pink"
wall27.shapeColor = "pink"
wall29.shapeColor = "pink"
wall31.shapeColor = "pink"
wall32.shapeColor = "pink"
wall34.shapeColor = "pink"
wall36.shapeColor = "pink"
wall37.shapeColor = "pink"
// wall39.shapeColor = "pink"
wall41.shapeColor = "pink"
wall42.shapeColor = "pink"
wall44.shapeColor = "pink"
wall46.shapeColor = "pink"
// wall47.shapeColor = "pink"
wall49.shapeColor = "pink"
wall51.shapeColor = "pink"
// wall52.shapeColor = "pink"
wall54.shapeColor = "pink"
wall56.shapeColor = "pink"
// wall57.shapeColor = "pink"
wall59.shapeColor = "pink"
wall61.shapeColor = "pink"
wall62.shapeColor = "pink"
wall64.shapeColor = "pink"
wall66.shapeColor = "pink"
wall67.shapeColor = "pink"
wall69.shapeColor = "pink"
wall71.shapeColor = "pink"
wall72.shapeColor = "pink"
wall74.shapeColor = "pink"
wall76.shapeColor = "pink"
wall77.shapeColor = "pink"
wall79.shapeColor = "pink"
wall81.shapeColor = "pink"
wall82.shapeColor = "pink"
wall84.shapeColor = "pink"
wall86.shapeColor = "pink"
wall87.shapeColor = "pink"
wall89.shapeColor = "pink"
wall91.shapeColor = "pink"
wall92.shapeColor = "pink"
wall94.shapeColor = "pink"
wall96.shapeColor = "pink"
wall97.shapeColor = "pink"





}























