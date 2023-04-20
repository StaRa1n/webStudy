//一维数组
var maxProfit = function (prices) {
  const dp = Array(prices.length).fill(0)
  let buy = Infinity

  //第0-i天卖出股票获取的最大收益
  for (let i = 0; i < prices.length; i++) {
    //选择最低点时买入
    if (prices[i] <= buy) {
      buy = prices[i]
      if (i > 0) {
        dp[i] = dp[i - 1]
      }
    } else {
      dp[i] = Math.max(dp[i - 1], prices[i] - buy)
    }
  }
  console.log(dp);
  return dp[dp.length - 1]
};

//二维数组
var maxProfit2 = function (prices) {
  //dp[i][0]表示第i天持有该股票的最大现金(为负)，dp[i][1]表示第i天不持有该股票的最大现金
  const dp = Array.from(Array(prices.length), () => Array(2).fill(0))
  dp[0][0] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i][0])
  }
  console.log(dp);
  return dp[dp.length - 1][1]
}
const prices = [1, 2]
console.log(maxProfit2(prices));