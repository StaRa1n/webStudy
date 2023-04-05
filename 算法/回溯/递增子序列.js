var findSubsequences = function (nums) {
    const path = [], res = [];

    function backstracking(startIndex) {
        if (path.length > 1) {
            res.push([...path]);
        }

        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) continue;
            path.push(nums[i]);
            if (nums[i] < path[path.length - 2]) {
                path.pop();
                continue;
            }

            backstracking(i + 1);
            path.pop();
        }
    }
    backstracking(0);
    return res;
};

const nums = [4, 4, 3, 2, 1];
console.log(findSubsequences(nums));