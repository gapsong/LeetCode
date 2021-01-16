const allConstruct = (target, substrings) => {
    if (target === '') {
        return [[]];
    }

    const temp = [];

    for (let substring of substrings) {
        if (target.indexOf(substring) === 0) {
            const suffix = target.slice(substring.length);
            const validPaths = allConstruct(suffix, substrings); // assumes to get only valid Paths
            const differentSolutions = validPaths.map((paths) => [substring, ...paths]);
            temp.push(...differentSolutions);
        }
    }

    return temp;
};

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
