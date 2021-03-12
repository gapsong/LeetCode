/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let strings = generateNums(k);
    for (let string1 of strings) {
        if (!s.includes(string1)) {
            return false;
        }
    }

    return true;
};

let generateNums = (k) => {
    let result = [];
    for (let i = 0; i <= Math.pow(2, k) - 1; i++) {
        const bitView = (i >>> 0).toString(2);
        result.push(bitView.padStart(k, '0'));
    }
    return result;
};

console.log(hasAllCodes('0110', 2));
