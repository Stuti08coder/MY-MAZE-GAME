var wall, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8 ,wall9, wall10, wall11, wall12, wall13, wall14, wall16, wall15 ,wall17, wall18, wall19, wall20;

var wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29,wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40;

var wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50, wall51, wall52, wall53, wall54, wall55, wall56, wall57, wall58, wall59, wall60;

var wall61, wall62, wall63, wall64, wall65, wall66, wall67, wall68, wall69, wall70

var player1

var arrow1, arrow2, arrow3, arrow4; 


function preload(){



}

function setup(){

createCanvas(windowWidth, windowHeight);
player1 = createSprite(1070,380,20,20)
arrow1 = createSprite(780,320,30,30)
arrow2 = createSprite(840,360,30,30)
arrow3 = createSprite(790,390,30,30)
arrow4 = createSprite(740,360,30,30)





}

function draw(){
  background("cyan");

text(mouseX + ","+ mouseY,mouseX,mouseY)

text("START", windowWidth/2, windowHeight/2)





keyMove();


wall= createSprite(160,-590,140,40)
wall1= createSprite(110,-540,40,140)
wall2= createSprite(250,-400,40,130)
wall3= createSprite(400,-530,190,40)
wall4= createSprite(490,-410,170,40)
wall5= createSprite(110,-280,40,150)
wall6= createSprite(340,-250,150,40)
wall7= createSprite(150,-190,120,40)
wall8= createSprite(395,-210,40,40)
wall9= createSprite(280,-80,40,120)
wall10= createSprite(110,50,40,260)
wall11= createSprite(220,90,220,40)
wall12= createSprite(555,-450,40,40)
wall13= createSprite(660,-590,230,40)
wall14= createSprite(690,-500,40,140)
wall15= createSprite(600,-300,250,40)
wall16= createSprite(740,-265,40,110)
wall17= createSprite(950,-590,150,40)
wall18= createSprite(850,-420,40,150)
wall19= createSprite(-570,855,90,90)
wall20= createSprite(440,30,40,300)
wall21= createSprite(480,180,120,40)
wall22= createSprite(300,230,40,90)
wall23= createSprite(885,-330,110,40)
wall24= createSprite(1005,-550,40,50)

// //wall25= createSprite(620,110,20,40)

// wall26= createSprite(600,200,20,40)

// wall27= createSprite(690,210,50,20)

// wall28= createSprite(475,180,50,20)

// wall33= createSprite(760,350,20,40)

// wall34= createSprite(865,390,20,60)

// wall35= createSprite(695,490,50,20)

// wall36= createSprite(295,560,20,40)

// //wall37= createSprite(790,180,20,20)

// wall38= createSprite(750,140,40,20)

// wall39= createSprite(630,420,20,20)

// wall40= createSprite(660,470,20,20)

// wall41= createSprite(390,290,20,80)

// wall42= createSprite(750,370,40,20)

// wall43= createSprite(790,350,40,20)

// wall44= createSprite(250,300,60,20)

// wall45= createSprite(440,290,20,20)

// wall46= createSprite(480,270,20,20)

// wall47= createSprite(460,150,20,40)

// wall48= createSprite(300,240,50,20)

// wall49= createSprite(350,200,20,100)

// wall50= createSprite(370,190,60,20)

// wall51= createSprite(425,140,50,20)

// wall52= createSprite(330,425,20,50)

// wall53= createSprite(450,440,20,80)

// wall54= createSprite(610,510,20,60)

// wall55= createSprite(260,140,80,20)

// wall56= createSprite(410,610,20,90)

// wall57= createSprite(420,440,50,20)

// wall58= createSprite(490,460,20,50)

// wall59= createSprite(240,200,50,20)

// wall60= createSprite(520,520,20,60)

// wall61= createSprite(560,600,20,50)

// wall62= createSprite(250,400,60,20)

// wall63= createSprite(270,375,20,30)

// wall64= createSprite(290,115,20,30)

// wall65= createSprite(860,110,50,20)

// wall66= createSprite(500,80,20,30)

// wall67= createSprite(380,590,50,20)

// wall68= createSprite(830,440,20,40)

// wall69= createSprite(870,510,50,20)

// wall70= createSprite(595,520,50,20)

// wall70= createSprite(700,590,20,70)






//boundry
//wall29= createSprite(570,50,700,40)
//wall30= createSprite(200,330,40,600)
//wall31= createSprite(900,310,40,560)
//wall32= createSprite(480,640,600,40)














drawSprites();
  
}


function keyMove(){

//camera.position.x = player1.x
if(player1.y<windowWidth){

  camera.position.y = player1.y


}
// if(keyIsDown(38) ){

//   player1.velocityY = -12


//   }


//   if(keyIsDown(38) ){

//     player1.y = player1.y-12
 
   
   
//      }
     
if(keyIsDown(38)){

  player1.y = player1.y-12
  
  }
  
    

 
if(keyIsDown(40)){

player1.y = player1.y+12

}



if(keyIsDown(37)){

  player1.x = player1.x-12
  
  }



  if(keyIsDown(39)){

    player1.x = player1.x+12
    
    }





  
}


