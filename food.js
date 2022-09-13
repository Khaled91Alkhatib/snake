/* A note to keep in mind is that CSS grid starts at 1, not 0 so in this project we need everything to be between 1 and 29 */
import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition(); /* Position of food */
const expansionRate = 1;
let scoreBoard = 0;

export function update() {
  /* We want to check if the snake is on top of the food so it can eat it */
  if (onSnake(food)) {
    expandSnake(expansionRate);
    scoreBoard++;
    document.getElementById("scoreBoard").innerHTML = scoreBoard;
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div'); /* This will go inside our gameBoard at a prticular x y coordinates */

  /* Since we are using grid, we can set the x y coordinates easily */
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;

  foodElement.classList.add("food"); /* To make the snake visible */
  gameBoard.appendChild(foodElement);
}

/* We need to return a new position for our food after it gets eaten and it shouldn't be on top of our snake */
function getRandomFoodPosition() {
  let newFoodPosition;
  /* the newFoodPosition should be == null not === null otherwise equalPositions() will cause an error */
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
