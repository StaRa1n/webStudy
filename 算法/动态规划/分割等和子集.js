var canPartition = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    //判断是否为奇数
    if (sum & 1) return false;
    const dp = Array(sum / 2 + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {
            //dp[j - num[i]] + num[i] 背包容量减去num[i]可以容纳的最大数（不一定为j - num[i]）加上num[i]
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
            if (dp[j] === sum / 2) return true
        }
    }
    return dp[sum / 2] === sum / 2;
};

console.log(canPartition([1, 5, 11, 5]))