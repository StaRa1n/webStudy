var change = function (amount, coins) {
  const dp = Array(amount + 1).fill(0)
  dp[0] = 1

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]]
    }
  }
  return dp
};

const coins = [3, 2, 5]
console.log(change(5, coins));