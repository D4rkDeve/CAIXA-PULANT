var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
   music.loadSound = ("music.mp3")
}   

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(590,580,200,30)
    bloco3.shapeColor = "gray";

    bloco4 = createSprite(800,580,200,30)
    bloco4.shapeColor = "black";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    
    bola.velocityY = 2;
    bola.velocityX = 4;
    
}

function draw() {
    background(rgb(169,169,169));
    arestas=createArestasprites();
    bola.bounceOff(arestas);
    
    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }

    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.velocityX = 0 
        bola.velocityY = 0
        //escreva o código para parar a música
        music.stop();   
    }   

    //escreva o código de ricochete de bola para bloco    
    bola.bounceOff(bloco3)
    //escreva o código de ricochete de bola para bloco4
    bola.bounceOff(bloco4)
    drawSprites();
}