let canvas = document.getElementById('screen');
let context = canvas.getContext('2d');

let speedBallX = 6;
let speedBallY = 6;

function background(width, heigth, color) {
  context.fillStyle = color;
  context.fillRect(0, 0, width, heigth);
}

function createBall(width, heigth, diameter) {
  context.beginPath();
  context.arc(width, heigth, diameter, 0, 2 * Math.PI);
  context.fillStyle = 'white';
  context.fill();
  context.stroke();
}

function setup() {
  background(1200, 800, 'black');
  createBall(50, 50, 15);
}

setup();