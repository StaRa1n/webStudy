var findTargetSumWays = function (nums, target) {
    //作为加法的数的总和为x,减法的数的总和为sum - x，则有x-（sum-x）= target
    // x = (sum + target) / 2
    const sum = nums.reduce((pre, cur) => pre + cur)
    let x = (sum + target) / 2
    if ((target + sum) % 2) return 0

    const dp = Array(x + 1).fill(0)
    dp[0] = 1

    for (let i = 0; i < nums.length; i++) {
        for (let j = x; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }

    return dp
};


const arr = [1]

console.log((findTargetSumWays(arr, 1)));