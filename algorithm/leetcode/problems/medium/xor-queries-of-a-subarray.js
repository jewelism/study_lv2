/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  return queries.map(([startIndex, endIndex]) => {
    let result = null;
    for (let i = startIndex; i <= endIndex; i++) {
      if (result === null) {
        result = arr[i];
        continue;
      }
      result ^= arr[i];
    }
    return result;
  });
};