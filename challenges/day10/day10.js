function checkJump(heights) {
  const leftSide = heights.splice(0, heights.indexOf(Math.max(...heights)));
  const leftCondition = leftSide.slice(1).every((l, i) => l >= leftSide[i]);
  const rightCondition = heights.slice(1).every((h, i) => h <= heights[i]);
  return (
    leftCondition && rightCondition && !!leftSide.length && heights.length > 1
  );
}
