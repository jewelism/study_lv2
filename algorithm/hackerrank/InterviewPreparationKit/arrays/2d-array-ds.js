function hourglassSum(arr) {
  let max = null;
  for (let i = 0; i < arr.length - 2; i++) {
    const inArr = arr[i];
    for (let j = 0; j < inArr.length - 2; j++) {
      const a = inArr[j];
      const b = inArr[j + 1];
      const c = inArr[j + 2];
      const d = arr[i + 1][j + 1];
      const e = arr[i + 2][j];
      const f = arr[i + 2][j + 1];
      const g = arr[i + 2][j + 2];
      const sum = a + b + c + d + e + f + g;
      if (max === null || max < sum) {
        max = sum;
      }
    }
  }
  return max;
}