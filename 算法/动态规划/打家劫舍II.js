var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  if (nums.lemgth === 2) return Math.max(nums[0], nums[1])

  // 考虑偷最前,不偷最后
  const firstDp = robber(nums, 0, nums.length - 1)
  // 考虑偷最后,不偷最前
  const endDp = robber(nums, 1, nums.length)

  return Math.max(firstDp[firstDp.length - 2], endDp[endDp.length - 1])
};

function robber(nums, start, end) {
  const dp = Array(nums.length).fill(0)
  if (start === 0) {
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
  } else {
    dp[1] = nums[1]
    dp[2] = Math.max(nums[1], nums[2])
  }


  for (let i = 2; i < end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp
}

const nums = [0, 0]
console.log(rob(nums));