function Promise(executor) {
  this.promiseState = 'bending'
  this.promiseResult = null
  //声明异步队列的回调函数
  this.callbacks = []

  //保存实例对象的this的值
  const self = this
  
  //resolve函数
  function resolve(data) {
    //判断状态
    if (self.promiseState !== 'bending') return
    //1. 修改对象的状态 (promiseState)
    self.promiseState = 'fulfilled'
    //2. 修改对象结果值 (promiseResult)
    self.promiseResult = data
    //先执行then方法获取到onResolved再进行回调(异步操作)
    self.callbacks.forEach( item => {
      item.onResolved(data)
    })
  }

  // reject函数
  function reject(data) {
    //判断状态
    if (self.promiseState !== 'bending') return
    //1. 修改对象的状态 (promiseState)
    self.promiseState = 'rejected'
    //2. 修改对象结果值 (promiseResult)
    self.promiseResult = data
    //先执行then方法获取到onResolved再进行回调(异步操作)
    self.callbacks.forEach( item => {
      item.onRejected(data)
    })
  }

  //处理throw
  try {
    //同步调用执行器函数
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

//then方法(异步执行)
Promise.prototype.then = function(onResolved, onRejected) {
  const self = this

  //判断回调函数参数
  if(typeof onResolved !== 'function') { onResolved = value => value  }
  if(typeof onRejected !== 'function') { onRejected = reason => {throw reason}}

  return new Promise((resolve, reject) => {
    
    //封装函数
    function callback(type) {
      //获取返回的结果then方法中回调函数的返回结果
      try{
        let result = type(self.promiseResult)
        if (result instanceof Promise) {
          result.then(v => {
            resolve(v)
          }, r => {
            reject(r)
          })
        }else {
          resolve(result)
        }
      }catch(e){
        reject(e)
      }
    }

    if (this.promiseState === 'fulfilled') {
      callback(onResolved)
    }

    if (this.promiseState === 'rejected') {
      //获取返回的结果then方法中回调函数的返回结果
      callback(onRejected)
    }

    if (this.promiseState === 'bending') {
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved)
        },
        onRejected: function () {
          callback(onRejected)
        }
      })
    }
  })
 
}

//catch方法
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}

//resolve方法
//根据传入的参数返回一个新的Promise
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(v => {
        resolve(v)
      }, r => {
        reject(r)
      })
    } else {
      //状态设置成功
      resolve(value)
    }
  })
}

//resolve方法
//根据传入的参数返回一个新的reject状态的Promise
Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value)
  })
}

//all方法
//遍历传入的promise数组,全部成功则返回成功的Promise
Promise.all = function (promiseArr) {
  const arr = []
  return new Promise((resolve, reject) => {
    //遍历
    promiseArr.forEach((item, index) => {
      item.then(v => {
        //确保顺序相对应
        arr[index] = v
        if (arr.length === promiseArr.length) resolve(arr)
      }, r => {
        reject(r)
      })
    })
  })
}

//race方法
//根据先执行的Promise决定返回Promise的状态
Promise.race = function (promiseArr) {
  return new Promise((resolve, reject) => {
    //遍历
    promiseArr.forEach((item, index) => {
      item.then(v => {
       resolve(v)
      }, r => {
        reject(r)
      })
    })
  })
}

