function combinationSum(candidates, target) {
    const path = [];
    const res = [];
    let sum = 0;

    function backstracking(candidates, target, startIndex) {
        if (sum === target) {
            res.push([...path]);
            return;
        } else if (sum > target) {
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            sum += candidates[i];
            path.push(candidates[i]);
            backstracking(candidates, target, i);
            sum -= candidates[i];
            path.pop();
        }
    }
    backstracking(candidates, target, 0);
    return res;
}

const candidates = [2, 3, 5];
console.log(combinationSum(candidates, 8));