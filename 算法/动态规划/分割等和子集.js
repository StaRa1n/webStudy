var canPartition = function (nums) {
    let sum = nums.reduce((pre, cur) => pre + cur)
    const dp = Array(sum / 2).fill(0)

    for (let i = 0; i < nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
            if (dp[j] === sum / 2) return true
        }
    }
    return false
};

console.log(canPartition([1, 5, 11, 5]))