var integerBreak = function (n) {
    const dp = [1]


    for (let i = 2; i < n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = j * dp[i - j];
        }
    }
    return dp
};

console.log(integerBreak(10))