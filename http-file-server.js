const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((request, response)=>{
    request.setEncoding('utf8')
    response.writeHead(200, { 'content-type': 'text/plain' })
    const stream = fs.createReadStream(filePath)
    stream.pipe(response)
})

server.listen(port)