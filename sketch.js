var tom1,tom2,tom3
var jerry1,jerry2,jerry3
var jardim1
function preload() {
    //carregue as imagens aqui
    jardim = loadImage("images/garden.png")
    tom1 = loadAnimation("images/cat1.png")
    tom2 = loadAnimation("images/cat2.png","images/cat3.png")
    tom3 = loadAnimation("images/cat4.png")
    jerry1 = loadAnimation("images/mouse1.png")
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerry3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    tom = createSprite(870,600)
    tom.addAnimation("dormi",tom1)
    tom.scale = 0.2;

    jerry = createSprite(200,600)
    jerry.addAnimation("queijo",jerry1)
    jerry.scale = 0.2;
}

function draw() {

    background(jardim);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
tom.velocityX=0
tom.addAnimation("vementao",tom3);
tom.changeAnimation("vementao");
tom.x = 300;
tom.scale = 0.2;

jerry.addAnimation("vemtroxa",jerry3);
jerry,changeAnimation("vemtroxa")
jerry.scale = 0.15;
}


    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
 if(keyCode === LEFT_ARROW){
tom.velocytyX = -5;

tom.addAnimation("toindo",tom2);
tom.changeAnimation("toindo");

jerry.addAnimation("vemtoro",jerry2);
jerry.changeAnimation("vemtoro");
jerry.frameDelay = 25;


 }

}
