const canSum = (num, numbers) => {
    const result = new Array(num + 1).fill(false);
    result[0] = true;

    for (let i = 0; i <= num; i++) {
        if (result[i] === true) {
            for (let number of numbers) {
                if (number + i <= num) result[number + i] = result[i];
            }
        }
    }
    return result[num];
};

console.log(canSum(7, [5, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(15, [3, 4, 7]));
console.log(canSum(300, [7, 14]));
