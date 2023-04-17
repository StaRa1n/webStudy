/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    let sumZero, sumOne

    //遍历字符串
    for (let str of strs) {
        sumZero = 0
        sumOne = 0

        for (let i of str) {
            if (i === '0') {
                sumZero++
            } else {
                sumOne++
            }
        }

        //倒叙遍历防止重复选取
        for (let i = m; i >= sumZero; i--) {
            for (let j = n; j >= sumOne; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - sumZero][j - sumOne] + 1)
            }
        }
    }
    return dp
};

strs = ["10", "0001", "111001", "1", "0"]
let m = 5
let n = 3
console.log(findMaxForm(strs, 5, 3));