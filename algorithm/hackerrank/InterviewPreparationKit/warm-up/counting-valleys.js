function countingValleys(steps, path) {
  // Write your code here
  console.log(typeof path);
  const D = 'D';
  const U = 'U';
  let depth = 0;
  let resultCount = 0;
  Array.from(path).forEach(direction => {
    if (depth === -1 && direction === U) {
      resultCount++;
    }
    if (direction === D) {
      depth--;
    } else {
      depth++;
    }
  });
  return resultCount;
}