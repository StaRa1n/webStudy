var letterCombinations = function (digits) {
    const path = [];
    const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const res = [];
    if (!digits) return res;
    // if (digits.length)

    function dfs(digits, index) {
        if (path.length === digits.length) {
            res.push(path.join(''));
            return;
        }

        for (let i of map[digits[index]]) {
            path.push(i);
            dfs(digits, index + 1);
            path.pop();
        }
    }
    dfs(digits, 0);
    return res;
};
console.log(letterCombinations('3468'))

// const d = '123';
// console.log(typeof (d[1]))