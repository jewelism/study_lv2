function rotLeft(a, d) {
  const left = [];
  const right = [];
  for (let i = 0; i < d; i++) {
    left.push(a[i]);
  }
  for (let i = d; i < a.length; i++) {
    right.push(a[i]);
  }
  return [...right, ...left];
}