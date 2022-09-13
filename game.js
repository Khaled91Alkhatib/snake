/* We need to set up a "game loop" which is a function that repeats itself forever
so that it constantly updates our render (like snake position and food) */

import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    if (confirm("Game over. Press OK to restart")) {
      window.location = "/"; /* This will refresh our page */
    }
    return; /* We return so that it wont run the rest of the code */
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;

  // console.log(currentTime)
  // console.log(secondsSinceLastRender)
  // console.log("render")
  lastRenderTime = currentTime;

  update(); /* It updates the logic for the game (move the snake, check snake length, check if we lost) */
  draw(); /* Checks the logic from the update() and act by it to visually see the outcome */
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();  /* This function is imported from snake.js */
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = ""; /* When the snake moves, it clears what's behind it instead of just growing non-stop */
  drawSnake(gameBoard);  /* This function is imported from snake.js */
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}