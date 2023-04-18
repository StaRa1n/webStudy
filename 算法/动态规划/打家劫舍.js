var rob = function (nums) {
  const dp = Array(nums.length).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let j = 2; j < nums.length; j++) {
    dp[j] = Math.max(dp[j - 1], dp[j - 2] + nums[j])
  }
  console.log(dp)
  return dp[nums.length - 1]
};

const nums = [2, 1, 1, 2]
console.log(rob(nums));