let obj = {
    p: ['hello', { y: 'word' }]
}

const { p, p: [x, { y }] } = obj
console.log(x);