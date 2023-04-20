//dp数组
var maxProfit = function (prices) {
  //dp[i][0]表示第i天持有该股票的最大现金，dp[i][1]表示第i天不持有该股票的最大现金
  const dp = Array.from(Array(prices.length), () => Array(2).fill(0))
  dp[0][0] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    // 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
    // 第i天买入股票，所得现金就是昨天不持有股票的所得现金减去 今天的股票价格 即：dp[i - 1][1] - prices[i]
    dp[i][0] = Math.max(dp[i - 1][1] - prices[i], dp[i - 1][0])

    // 第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]
    // 第i天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金即：prices[i] + dp[i - 1][0]
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }

  console.log(dp);
  return dp[dp.length - 1][1]
};

//滚动数组
function maxProfit2(prices) {
  const dp = Array(prices.length).fill(0)

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1] - prices[i],)
  }
}
const prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));