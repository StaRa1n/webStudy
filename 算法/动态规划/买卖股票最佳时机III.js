function maxProfit(prices) {
  //dp[i][0~3]  
  // 0:第一次持有股票的现金最大值 
  // 1:第一次不持有的现金最大值 
  // 2:第二次持有股票的现金最大值 
  // 3:第二次不持有股票的现金最大值

  const dp = Array.from(Array(prices.length), () => Array(4).fill(0))
  dp[0][0] = -prices[0]
  dp[0][2] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i])
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i])
  }

  return dp[dp.length - 1][3]
}

const prices = [3, 3, 5, 0, 0, 3, 1, 4]
console.log(maxProfit(prices));