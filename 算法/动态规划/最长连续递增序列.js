//双指针
var findLengthOfLCIS = function (nums) {
  let l = 0, r = 1
  let resurt = 1

  while (r < nums.length) {
    if (nums[r] > nums[r - 1]) {
      r++
    } else {
      r++
      l = r - 1
    }
    resurt = Math.max(resurt, r - l)

  }
  return resurt
};

//dp
var findLengthOfLCIS2 = function (nums) {
  //以nums[i]结尾的最长连续递增序列
  const dp = Array(nums.length).fill(1)
  let result = 1

  for (let i = 1; i < nums.length; i++) {
    //dp[i]依赖于dp[i - 1]
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1
    }
    result = Math.max(dp[i], result)
  }
  return result
};

const nums = [2, 2, 2, 2, 3]
console.log(findLengthOfLCIS2(nums));