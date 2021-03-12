function sockMerchant(n, ar) {
  let count = 0;
  const match = () => {
    const [del] = ar.splice(0, 1);
    ar.some((a, idx) => {
      if (a === del) {
        ar.splice(idx, 1);
        count++;
        return true
      }
      return false;
    });
  }
  while (ar.length) {
    match();
  }
  return count;
}
