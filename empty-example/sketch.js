const tamanho = 10;
let cobrinha


function setup() {
  createCanvas(400, 400);
  cobrinha = new cobra();
  frameRate(100)
}

function draw() {
  background(51);
  cobrinha.show();
  cobrinha.update();
}