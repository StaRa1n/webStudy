var wordBreak = function (s, wordDict) {
    const dp = Array(s.length + 1).fill(false)
    dp[0] = true

    //s字符串做背包容量，wordDict做物品，求装满s是否可行
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            //切割字符串比较
            if (s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                dp[i] = true
            }
        }
    }
    console.log(dp)
    return dp[s.length]
};

const s = "catsandog"

const wordDict = ["cats", "dog", "sand", "and", "cat"]

console.log(wordBreak(s, wordDict));