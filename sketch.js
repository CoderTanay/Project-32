const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground , base1, base2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var polygon, launcher ;

var score = 0

function preload() {
  
}

var gameState = "onSling";

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20)
    base1 = new Ground(580,330,250,15)
    base2 = new Ground(950,220,200,15)

    box1 = new Box(490,300,30,40)
    box2 = new Box(520,300,30,40)
    box3 = new Box(550,300,30,40)
    box4 = new Box(580,300,30,40)
    box5 = new Box(610,300,30,40)
    box6 = new Box(640,300,30,40)
    box7 = new Box(670,300,30,40)

    box8 = new Box(520,260,30,40)
    box9 = new Box(550,260,30,40)
    box10 = new Box(580,260,30,40)
    box11 = new Box(610,260,30,40)
    box12 = new Box(640,260,30,40)

    box13 = new Box(550,220,30,40)
    box14 = new Box(580,220,30,40)
    box15 = new Box(610,220,30,40)

    box16 = new Box(580,180,30,40)

    box17 = new Box(885,180,30,40)
    box18 = new Box(915,180,30,40)
    box19 = new Box(945,180,30,40)
    box20 = new Box(975,180,30,40)
    box21 = new Box(1005,180,30,40)

    box22 = new Box(915,140,30,40)
    box23 = new Box(945,140,30,40)
    box24 = new Box(975,140,30,40)

    box25 = new Box(945,100,30,40)

    polygon = new Polygon(150,200,40,40)

    launcher = new Launcher(polygon.body,{ x:150 , y:200 }) ;
    
}

function draw(){
    getBgColor();
    Engine.update(engine);
    strokeWeight(2)

    base1.display();
    base2.display();

    polygon.display();

    fill("lightgreen")
    box1.display();
    box9.display();
    box14.display();
    box22.display();

    fill("green")
    box2.display();
    box17.display();

    fill("lightgreen")
    box3.display();
    box12.display();
    box16.display();
    box18.display();
    box23.display();

    fill("lightgreen")
    box4.display();
    box8.display();
    box15.display();
    box19.display();
    box25.display();

    fill("green")
    box5.display();
    box13.display();
    box20.display();

    fill("green")
    box6.display();
    box11.display();
    box21.display();

    fill("green")
    box7.display();
    box10.display();
    box24.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

    launcher.display();

    strokeWeight(2)
    stroke("black")
    fill("white")
    textSize(40)
    text ("Press Space To Cheat And Try Again", 300,50)
    text("Score: "+score,1000,40)
    
}

function mouseDragged(){
    if(gameState === "onSling"){
    Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY})
    }
}

function mouseReleased(){
    launcher.fly();
    gameState==="launched"
}

function keyPressed(){
    if (keyCode === 32){
      gameState === "onSling"
      Matter.Body.setPosition(polygon.body,{x:150, y:200})
      launcher.attach(polygon.body)
    }
  }

async function getBgColor(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
      var responseJSON = await response.json();
      var dateTime = responseJSON.datetime;
      var hours = dateTime.slice(11,13);
      console.log(hours);
      if(hours >= 18 && hours <= 06){
          background('black');
      }
      else{
          background('white');
      }  
  
}