//1. 引入express
const express = require('express')

//2. 创建应用对象
const app = express()

//3. 创建路由对象
//request 请求报文的封装
//response 响应报文的封装
//GET请求
app.get('/server', (request, response) => {
  //设置响应头, 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  //设置响应体
  response.send('HELLO AJAX -2')
})

//POST请求
app.post('/server', (request, response) => {
  //设置响应头, 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  //设置响应体
  response.send('HELLO AJAX POST')
})

//JSON 响应
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

//延时响应
app.get('/delay', (request, response) => {
  //设置响应头, 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  //设置响应体
  //延时2s
  setTimeout(() => {
    response.send('延时响应2s')
  }, 2000);
})

//axios 服务
app.all('/axios-server', (request, response) => {
  //设置响应头, 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers','*')
  //设置响应体
  response.send('HELLO AXIOS')
})

//4. 监听端口启动服务
app.listen(8000, () => {
  console.log('服务已启动, 8000端口监听中');
})