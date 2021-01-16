const howSum = (value: number, numbers: number[], memo: Record<number, number[] | null> = {}): number[] | null => {
    if (value in memo) {
        return memo[value];
    }
    if (value == 0) {
        return [];
    }

    if (value < 0) {
        return null;
    }

    const array = [];
    for (let i = 0; i < numbers.length; i++) {
        let combi = howSum(value - numbers[i], numbers, memo);
        if (combi) {
            array.push([...combi, numbers[i]]);
        }
    }
    memo[value] = getMinLength(array);

    return memo[value];
};

const getMinLength = (array: number[][]) => {
    return array.reduce((acc, item) => {
        if (item.length < acc.length) {
            return item;
        } else return acc;
    }, array[0] || []);
};

console.log(howSum(21, [1, 2, 3, 9]));
