console.log(process.argv)

let playerAction = process.argv[process.argv.length - 1]

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
} else if (playerAction === 'rock' && computerAction === 'scissor' ||
    playerAction === 'scissor' && computerAction === 'paper' ||
    playerAction === 'paper' && computerAction === 'rock') {
    console.log('赢了')
} else {
    console.log('输了')
}