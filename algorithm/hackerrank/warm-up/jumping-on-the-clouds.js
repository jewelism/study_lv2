function jumpingOnClouds(c) {
  let count = 0;
  let idx = 0;
  while (idx < c.length - 1) {
    count++;
    if (c[idx + 2] === 0) {
      idx += 2;
      continue;
    }
    if (c[idx + 1] === 1) {
      idx += 2;
      continue;
    }
    idx++;
  }
  return count;
}
