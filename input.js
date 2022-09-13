let inputDirection = { x: 0, y: 0 }; /* By default, we don't want our snake to move */
let lastInputDirection = { x: 0, y: 0 };


/* Below is adjusting game to listen to keyboard inputs */
window.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break; /* If we are moving up or down, ignore the ArrowUp (you can't go from up to down immediately and vice versa) */
      inputDirection = { x: 0, y: -1 }; /* -1 for y is moving up and 1 for y is moving up */
      break;

    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;

    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break; /* If we are moving left or right, ignore ArrowLeft (you can't go from left to right immediately and vice versa) */
      inputDirection = { x: -1, y: 0 }; /* -1 for x is moving to the left and 1 for x is moving to the right */
      break;

    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}