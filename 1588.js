/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let level = Math.floor((arr.length + 1) / 2);
  let counter = 0;

  for (
    var i = 0, k = level;
    i < arr.length;
    i++, i < arr.length / 2 ? k++ : k--
  ) {
    counter += Math.max(k, level) * arr[i];
    console.log(counter, k, arr[i]);
  }
  return counter;
};

console.log(sumOddLengthSubarrays([10, 11, 12]));
