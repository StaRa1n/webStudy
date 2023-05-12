class Promise{
  constructor(executor){
    this.promiseState = 'bending'
    this.promiseResult = null
    this.callbacks = []

    let reslove = (data) => {
      if (this.promiseState !== 'bending') return
      this.promiseState = 'fulfilled'
      this.promiseResult = data
      this.callbacks.forEach(items => {
        if (items.onResolved) items.onResolved(data)
      })
    }

    let reject = (data) => {
      if (this.promiseState !== 'bending') return
      this.promiseState = 'rejected'
      this.promiseResult = data
      this.callbacks.forEach(items => {
        if (items.onRejected) items.onResolved(data)
      })
    }

    try {
      executor(reslove, reject)
    } catch (error) {
      console.warn(error);
    }
  }

  then(onResolved, onRejected) {
    const callback = (type) => {
      let result = type(this.promiseResult)
      if (result instanceof Promise) {
        result.then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      }else {
        resolve(this.promiseResult)
      }
    }
    return new Promise((resolve, reject) => {
      if (this.promiseState === 'fulfilled') {
        let result = onResolved(this.promiseResult)
      }
      if (this.promiseState === 'rejected') {
        onRejected(this.promiseResult)
      }
      if (this.promiseState === 'bending') {
        this.callbacks.push({
          onResolved,
          onRejected
        })
      }
    })
  }

}