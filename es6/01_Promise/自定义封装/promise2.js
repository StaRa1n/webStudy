function Promise (executor) {
  this.promiseState = 'bending'
  this.promiseResult = null
  this.callbacks = []

  // 使用箭头函数保证this指向实例Promise
  const resolve = (value) => {
    // 保证只改变一次状态
    if (this.promiseState !== 'bending') return
    this.promiseState = 'fulfilled'
    this.promiseResult = value

    this.callbacks.forEach(items => {
      items.onResolved(value)
    })
  }

  const reject = (reason) => {
    if (this.promiseState !== 'bending') return
    this.promiseState = 'rejected'
    this.promiseResult = reason

    this.callbacks.forEach(items => {
      items.onRejected(reason)
    })
  }

  // 实现catch方法
  try{
    executor(resolve, reject)
  }catch(r){
    reject(error)
  }
}

Promise.prototype.then = function(onResolved, onRejected) {
  const self = this

  // 可选参数
  if (typeof onRejected !== 'function') {onRejected = reason => { throw reason;}}
  if (typeof onResolved !== 'function') { onResolved = value => value;}


  return new Promise ((resolve, reject) => {

    function callback(type) {
      try {
        let result = type(self.promiseResult)
        if (result instanceof Promise) {
          // 当Promise实例对象then方法中返回的是promise对象,
          // 则该实例Promise对象中then方法获取的新的Promise的状态
          // 为then方法中返回的是promise对象的状态
          result.then((v) => {
            resolve(v)
          }, (r) => {
            reject(r)
          })
        }else {
          // 当返回为非peomise对象时获得状态为成功值为返回值的Promise
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }

    if (self.promiseState === 'fulfilled') {
      callback(onResolved)
    }
    // then获得的promise对象不由原Promise实例决定
    if (self.promiseState === 'rejected') {
      callback(onRejected)
    }

    // 异步实现then方法
    if (self.promiseState === 'bending') {
      self.callbacks.push({
        onResolved: function () {callback(onResolved)},
        onRejected: function () {callback(onRejected)},
      })
    }
  
  })

}

  // 异常穿透
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}

Promise.defer = Promise.deferred = function () {
    let dfd = {}
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
module.exports = Promise;
