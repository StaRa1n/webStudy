const maxProfit = (k, prices) => {
  if (prices == null || prices.length < 2 || k == 0) {
    return 0;
  }

  const dp = Array.from(Array(prices.length), () => Array(2 * k + 1).fill(0))
  console.log(dp);

  for (let j = 1; j < 2 * k; j += 2) {
    dp[0][j] = -prices[0]
  }

  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j < 2 * k; j += 2) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1] - prices[i]) //持有股票状态
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i][j] + prices[i]) //未持有股票状态
    }
  }
  console.log(dp);

  return dp[prices.length - 1][2 * k]
};

const prices = [3, 2, 6, 5, 0, 3]
console.log(maxProfit(2, prices));