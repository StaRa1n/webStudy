var integerBreak = function (n) {
    const dp = [0, 1]


    for (let i = 2; i < n; i++) {
        for (let j = 1; j < i; j++) {
            if (dp[i] === null) {
                console.log(1)
                dp[i] = j * dp[i - j];
            }
        }
    }
    return dp
};

console.log(integerBreak(10))