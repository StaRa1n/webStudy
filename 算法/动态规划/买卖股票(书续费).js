const maxProfit = (prices, fee) => {
  const dp = Array.from(Array(prices.length), () => Array(2).fill(0))

  dp[0][0] = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)
  }
  return dp[prices.length - 1][1]
}


const prices = [1, 3, 7, 5, 10, 3]
console.log(maxProfit(prices, 3));