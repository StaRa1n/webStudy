//map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。并且它不会改变原来的数组。
let arr = Array(m).fill().map(() => Array(n))

let arr2 = Array.from(Array(m), () => Array(n))