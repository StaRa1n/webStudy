var findLength = function (nums1, nums2) {
  // dp[i][j] 以nums1[i - 1]、nums2[j - 1]为结尾的最长公共子数组的长度
  const dp = Array.from(Array(nums1.length + 1), () => Array(nums2.length + 1).fill(0))
  let result = 1
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 2; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      if (dp[i][j] > result) result = dp[i][j]
    }
  }
  return result
};

const nums1 = [1, 2, 3, 2, 1], nums2 = [3, 2, 1, 4, 7]

console.log(findLength(nums1, nums2));