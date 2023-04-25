var longestCommonSubsequence = function (text1, text2) {
  const t1 = Array.from(text1), t2 = Array.from(text2)
  // dp[i][j]表示t1[0~i-1]和t2[0~j-1]的最长公共子序列
  const dp = Array.from(Array(t1.length + 1), () => Array(t2.length + 1).fill(0))
  for (let i = 1; i <= t1.length; i++) {
    for (let j = 1; j <= t2.length; j++) {
      if (t1[i - 1] === t2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[t1.length][t2.length]
};