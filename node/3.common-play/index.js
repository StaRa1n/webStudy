let playerAction = process.argv[process.argv.length - 1]

const game = require('./lib.js')

// const result = game(playerAction)


//获取进程的输入
let count = 0
process.stdin.on('data', function (e) {
    // console.log(e.toString().trim())
    const playerAction = e.toString().trim()
    const result = game(playerAction)
    if (result === -1) {
        count++
        if (count === 3) {
            console.log('我不玩了')
            //结束进程
            process.exit()
        }
    } else {
        count = 0
    }
})