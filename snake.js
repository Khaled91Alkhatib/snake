import { getInputDirection } from "./input.js";

export const snakeSpeed = 9;

/* This is an array of x y positions because our snake is a bunch of different segments
and the segments are in particular x y positions on our grid. The center of our grid is x:11 and y:11 if the size of the grid is 21 */
const snakeBody = [{ x: 14, y: 14 }];

let newSegments = 0; /* By default, our snake is not growing */

export function update() {
  // console.log("update");
  addSegments(); /* Every time we update, the function gets called */

  const inputDirection = getInputDirection();

  /* We want to loop through every segment except the last one because it will essentially dissappear */
  for (let i = snakeBody.length - 2; i >= 0; i--) {

    /* We want to shift our entire snake */
    snakeBody[i + 1] = { ...snakeBody[i] };  /* [i + 1] is the element before the one we selected (our last element) */

  }

  /* Update the head of the snake */
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  // console.log("draw")

  /* Loop through the snake body */
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div'); /* This will go inside our gameBoard at a prticular x y coordinates */

    /* Since we are using grid, we can set the x y coordinates easily */
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;

    snakeElement.classList.add("snake"); /* To make the snake visible */
    gameBoard.appendChild(snakeElement);
  });

}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) {
      return false;
    }
    return equalPositions(segment, position);
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
  return (
    pos1.x === pos2.x && pos1.y === pos2.y
  );
}

/* Take new segments and add them to the bottom of our snake */
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    /* Take the very last element of our snake and duplicating that on tho the end of our snake */
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0; /* So that it doesn't add elements to itself other than the one we specified */
}