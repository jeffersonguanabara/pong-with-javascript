let canvas = document.getElementById('screen');
let context = canvas.getContext('2d');

/**
 * variables relating construction background
 */
let backgroundWidth = 600;
let backgroundHeigth = 400;
let backgroundColor = 'black';

/**
 * variables relating to the ball and its movement  
 */ 
let initialPositionOfTheBallOnTheXAxis = backgroundWidth / 2;
let initialPositionOfTheBallOnTheYAxis = backgroundHeigth / 2;
let initialDiameterOfTheBall = 15;
let ballColor = 'white';
let speedBallX = 6;
let speedBallY = 6;

function background(width, heigth, color) {
  context.fillStyle = color;
  context.fillRect(0, 0, width, heigth);
}

function createBall(width, heigth, diameter) {
  context.beginPath();
  context.arc(width, heigth, diameter, 0, 2 * Math.PI);
  context.fillStyle = ballColor;
  context.fill();
  context.stroke();
}

function ballMoviment() {
  while(true) {
    createBall(initialPositionOfTheBallOnTheXAxis, initialPositionOfTheBallOnTheYAxis, initialDiameterOfTheBall);
    initialPositionOfTheBallOnTheXAxis += speedBallX;
  }
}

function setup() {
  background(backgroundWidth, backgroundHeigth, backgroundColor);
  ballMoviment();
}

setup();