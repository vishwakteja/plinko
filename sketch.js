const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground, division1, division2, division3, division4, division5, division6, plinko1, plinko2, plinko3 ,plinko4 ,
plinko5, plinko6, plinko7;
var plinko8, plinko9, plinko10 ,plinko11 ,
plinko12, plinko13, plinko14, plinko15, plinko16;
var plinko17, plinko18, plinko19 ,plinko20,
plinko21, plinko22, plinko23, plinko24, plinko25;
var plinko25, plinko26, plinko27 ,plinko28,
plinko29, plinko30, plinko31, plinko32, plinko33, particle;

function setup() {
  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

   ground= new Ground(200, 595, 400, 10)
   division1= new Ground(1, 450, 4, 300)
   division2= new Ground(80, 450, 4,300)
   division3= new Ground(160,450, 4,300)
   division4= new Ground(240,450, 4,300)
   division5= new Ground(320, 450, 4,300)
   division6= new Ground(398, 450, 4,300)
  plinko1=new Plinko(50, 80)
  plinko2=new Plinko(100, 80)
  plinko3=new Plinko(150, 80)
  plinko4=new Plinko(200, 80)
  plinko5=new Plinko(250, 80)
  plinko6=new Plinko(300, 80)
  plinko7=new Plinko(350, 80)

  plinko8=new Plinko(20, 130)
  plinko9=new Plinko(70, 130)
  plinko10=new Plinko(120, 130)
  plinko11=new Plinko(170, 130)
  plinko12=new Plinko(220, 130)
  plinko13=new Plinko(270, 130)
  plinko14=new Plinko(320, 130)
  plinko15=new Plinko(370, 130)
  
  plinko16=new Plinko(50, 180)
  plinko17=new Plinko(100, 180)
  plinko18=new Plinko(150, 180)
  plinko19=new Plinko(200, 180)
  plinko20=new Plinko(250, 180)
  plinko21=new Plinko(300, 180)
  plinko22=new Plinko(350, 180)

  plinko23=new Plinko(20, 230)
  plinko24=new Plinko(70, 230)
  plinko25=new Plinko(120, 230)
  plinko26=new Plinko(170, 230)
  plinko27=new Plinko(220, 230)
  plinko28=new Plinko(270, 230)
  plinko29=new Plinko(320, 230)
  plinko30=new Plinko(370, 230)

  particle= new Ptl(200, 30)
}


function draw() {
  background("black");  
      ground.display();
      division1.display();
      division2.display();
      division3.display();
      division4.display();
      division5.display();
      division6.display();
      plinko1.display();
      plinko2.display();
      plinko3.display();
      plinko4.display();
      plinko5.display();
      plinko6.display();
      plinko7.display();   

      plinko8.display();
      plinko9.display();
      plinko10.display();
      plinko11.display();
      plinko12.display();
      plinko13.display();
      plinko14.display();  
      plinko15.display();   
     
      plinko16.display();
      plinko17.display();
      plinko18.display();
      plinko19.display();
      plinko20.display();
      plinko21.display();
      plinko22.display(); 
      
      plinko23.display();
      plinko24.display();
      plinko25.display();
      plinko26.display();
      plinko27.display();
      plinko28.display();
      plinko29.display();  
      plinko30.display(); 

      particle.display();


      if (frameCount%60===0){
            particle.push(new Ptl(random(width/2-10, width/2+10, 10, 10)))

      }
     
}

