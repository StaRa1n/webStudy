var combinationSum3 = function (k, n) {
    let res = [];
    let path = [];
    let sum = 0;

    function backtracking(k, n, startIndex) {
        if (path.length === k) {
            if (sum === n) res.push([...path]);
            return;
        }

        for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
            sum += i;
            path.push(i);
            if (sum > n) {
                sum -= i;
                path.pop();
                return;
            }
            backtracking(k, n, i + 1);
            sum -= i;
            path.pop();
        }
    }
    backtracking(k, n, 1);
    return res;
};

console.log(combinationSum3(3, 9));
