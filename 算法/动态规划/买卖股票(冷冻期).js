const maxProfit = (prices) => {
  /* dp[0][j]: 
  j=0 时持有股票状态， 
  j=1 时未持有股票状态(前一天之前卖出或前一天卖出)
  j=2 时今天卖出股票状态
  j=3 时今天冻结期状态 */

  const dp = Array.from(Array(prices.length), () => Array(4).fill(0))

  dp[0][0] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < 4; j++) {
      /*  操作一：前一天就是持有股票状态（状态一）:dp[i][0] = dp[i - 1][0]
          操作二：今天买入了，有两种情况
          前一天是冷冻期（状态四）:dp[i - 1][3] - prices[i]
          前一天是保持卖出股票的状态（状态二）:dp[i - 1][1] - prices[i] */
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][3] - prices[i], dp[i - 1][1] - prices[i])
      // 前一天之前卖出或前一天卖出
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3])
      dp[i][2] = dp[i - 1][0] + prices[i]
      dp[i][3] = dp[i - 1][2]
    }
  }
  return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2], dp[prices.length - 1][3])
}

const prices = [1, 2, 3, 0, 2]
console.log(maxProfit(prices));