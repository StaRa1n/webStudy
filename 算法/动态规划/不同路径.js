/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let x = obstacleGrid.length, y = obstacleGrid[0].length
    const dp = Array(x).fill().map(item => Array(y))

    for (let i = 0; i < x; i++) {
        if (obstacleGrid[i][0] === 1) {
            dp[i][0] = 0
        } else {
            dp[i][0] = 1
        }
    }

    for (let i = 0; i < y; i++) {
        if (obstacleGrid[0][i] === 1) {
            dp[0][i] = 0
        } else {
            dp[0][i] = 1
        }
    }

    for (let i = 1; i < x; i++) {
        for (let j = 1; j < y; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
            } else {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
            }
        }
    }
    console.log(dp)
    return dp[x - 1][y - 1]
};

const arr = [[0, 0], [1, 0]]
console.log(uniquePathsWithObstacles(arr))