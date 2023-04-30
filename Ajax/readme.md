# Ajax

## 一. 基本使用

1. 引入 express
   `const express = require('express')`

2. 创建应用对象
   `const app = express()`

3. 创建路由对象

   ```
   app.get('/', (request, response) => {
     //设置响应
     //request 请求报文的封装
     //response 响应报文的封装
     response.send('HELLO express')
   })
   ```

4. 监听端口启动服务
   ```
   app.listen(8000, () => {
     console.log('服务已启动, 8000 端口监听中');
   })
   ```

## 二. GET 请求

1. 创建对象
   `const xhr = new XMLHttpRequest()`
2. 初始化 设置请求方法和 url
   `xhr.open('GET', 'http://127.0.0.1:8000/')`
3. 发送
   `xhr.send()`
4. 事件绑定
   ```
   xhr.onreadystatechange = () => {
     //判断 (服务端返回了所有结果)
     if (xhr.readyState === 4) {
       //判断响应状态码
       //2xx 成功
       if (xhr.status >= 200 && xhr.status < 300) {
         //处理结果 行 头 空行 体
         //1. 响应行
         // console.log(xhr.status); //状态码
         // console.log(xhr.statusText); //状态字符串
         // console.log(xhr.getAllResponseHeaders());//所有响应头
         // console.log(xhr.response);//响应体
         box.innerHTML = xhr.response
       }
     }
   }
   ```
5. 设置参数
   `xhr.open('GET', 'http://127.0.0.1:8000?a=100&&b=200')`

## 三. POST 请求

> 与 GET 请求格式基本一致

1. 初始化
   `xhr.open('POST', 'http://127.0.0.1:8000/')`
2. 服务器创建路由对象
   ```
   app.post('/', (request, response) => {
     response.send('HELLO POST')
   })
   ```
3. 设置参数
   1. `xhr.open('POST', 'http://127.0.0.1:8000?a')`
   2. `xhr.send('a=100&b=200')`

## 四. JSON 请求

1. 服务端
   ```
   app.all('/json-server', (request, response) => {
   //设置响应头, 设置允许跨域
   response.setHeader('Access-Control-Allow-Origin', '*')
   //响应一个数据
   const data = {
     school: 'jiangcai'
   }
   //对对象进行字符串转换
   const str = JSON.stringify(data)
   //设置响应体
   response.send(str)
   })
   ```
2. 页面
   1. 手动转换数据
      `const data = JSON.parse(xhr.response)`
   2. 自动转换数据
      设置响应体的数据类型: `xhr.responseType = 'json'`
      自动转换: `box.innerHTML = xhr.response.school`

## 五. 请求超时与网络异常

1. 请求超时
   超时限制: `xhr.timeout = time`
   超时回调: `xhr.ontimeout = function(){...}`
2. 网络异常
   `xhr.onerror = function(){...}`

## 六. 取消请求

&emsp;&emsp;`xhr.abort()`

## 七. 请求重复问题

1.  设置标识变量

    ```
    let isSending = false //标识变量
    btn[0].onclick = () => {
      //如果正在发送同一个请求,取消上一个
      if (isSending) xhr.abort()

      xhr = new XMLHttpRequest()
      xhr.open('GET', 'http://127.0.0.1:8000/delay')

      isSending = true //修改标识变量

      xhr.send()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          isSending = false //修改标识变量
        }
      }
    }
    ```
