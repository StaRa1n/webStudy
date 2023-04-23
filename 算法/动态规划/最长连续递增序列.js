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

const nums = [2, 2, 2, 2, 3]
console.log(findLengthOfLCIS(nums));