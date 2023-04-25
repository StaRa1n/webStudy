var lengthOfLIS = function (nums) {
  let result = 1
  // dp[i]表示以nums[i]结尾的最长递增子序列
  const dp = Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {

      // 在dp[0~i-1]中找到最长的递增子序列再加上nums[i]
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }

    }
    result = Math.max(result, dp[i])
  }
  return result
};

