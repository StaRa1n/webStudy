var integerBreak = function (n) {
    let dp = Array(n + 1).fill(0)
    dp[2] = 1;


    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i / 2; j++) {
            dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i])
        }
    }
    return dp
};

console.log(integerBreak(10))