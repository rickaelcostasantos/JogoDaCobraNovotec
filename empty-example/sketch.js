const tamanho = 10;


function setup() {
  createCanvas(400, 400);
  cobrinha = new cobra();
  
}

function draw() {
  background(51);
  cobrinha.show();
  cobrinha.update();
}