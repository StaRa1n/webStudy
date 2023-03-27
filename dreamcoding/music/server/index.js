const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    const fileUrl = path.join(__dirname, '/source.json');

    const list = fs.readFileSync(fileUrl, 'utf-8');

    res.writeHead(200, { 'Content-Type': 'application/json' })


    res.end(list);
})

server.listen(3000, () => {
    console.log('项目已启动')
})