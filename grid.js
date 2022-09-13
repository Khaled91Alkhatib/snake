export function randomGridPosition() {
  return {
    /* Our grid size is 27 and we add 1 because we agreed that everything starts from 1 not 0
    so by adding 1 the random number will be between 1 and 27  */
    x: Math.floor(Math.random() * 27) + 1,
    y: Math.floor(Math.random() * 27) + 1
  };
}

export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > 27 || position.y < 1 || position.y > 27
  );
}