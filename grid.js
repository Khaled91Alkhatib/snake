export function randomGridPosition() {
  return {
    /* Our grid size is 29 and we add 1 because we agreed that everything starts from 1 not 0
    so by adding 1 the random number will be between 1 and 29  */
    x: Math.floor(Math.random() * 40) + 1,
    y: Math.floor(Math.random() * 29) + 1
  };
}

export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > 40 || position.y < 1 || position.y > 29
  );
}