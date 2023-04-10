module.exports = function (playerAction) {
    let random = Math.random() * 3

    if (random < 1) {
        computerAction = 'rock'
    } else if (random < 2) {
        computerAction = 'scissor'
    } else {
        computerAction = 'paper'
    }

    if (playerAction === computerAction) {
        console.log('平局')
        return 0
    } else if (playerAction === 'rock' && computerAction === 'scissor' ||
        playerAction === 'scissor' && computerAction === 'paper' ||
        playerAction === 'paper' && computerAction === 'rock') {
        console.log('赢了')
        return 1
    } else {
        console.log('输了')
        return -1
    }
}