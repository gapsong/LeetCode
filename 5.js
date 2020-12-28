/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const charArray = [...s];

  if (s == null || s.length == 1) {
    return s;
  }

  let range = [0, 0];

  for (var i = 0; i < charArray.length; i++) {
    for (var r = 0; r <= charArray.length; r++) {
      const left = i - r;
      const right = i + r;
      if (!(left < 0 || charArray.length < right)) {
        if (charArray[left] == charArray[right]) {
          if (right - left > range[1] - range[0]) {
            range[0] = left;
            range[1] = right;
          }
        } else {
          break;
        }
      }
    }
  }

  for (var i = 0; i < charArray.length; i++) {
    for (var r = 0; r <= charArray.length; r++) {
      const left = i - r;
      const right = i + 1 + r;
      if (!(left < 0 || charArray.length < right)) {
        if (charArray[left] == charArray[right]) {
          if (right - left > range[1] - range[0]) {
            range[0] = left;
            range[1] = right;
          }
        } else {
          break;
        }
      }
    }
  }

  return s.substring(range[0], range[1] + 1);
};

console.log(longestPalindrome('aacabdkacaa'));
