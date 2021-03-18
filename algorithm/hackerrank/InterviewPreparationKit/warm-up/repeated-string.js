const a = 'a';
const calculateACount = string => Array.from(string).reduce((acc, cur) => cur === a ? acc + 1 : acc, 0);

function repeatedString(s, n) {
  const snCount = calculateACount(s);
  const restCount = calculateACount(s.substring(0, n % s.length));
  return snCount * parseInt(n / s.length) + restCount;
}