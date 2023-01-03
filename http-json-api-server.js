/**
 * Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.
 */

const http = require('http');
const url = require('node:url');
const port = process.argv[2];

const ISO_ENDPOINT = `/api/parsetime`;
const UNIX_ENDPOINT = `/api/unixtime`;

function getTime(type, input){
    let date = new Date(input);
    switch(type){
        case 'iso':
            return {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
        case 'unix':
            return {
                unixtime: date.getTime()
            }

    }
}

const server = http.createServer((req,res)=>{
    const myURL = url.parse(req.url, true);
    let result = ""
    switch(myURL.pathname){
        case ISO_ENDPOINT:
            res.writeHead(200, {'Content-Type':'application/json'});
            result = getTime('iso', myURL.query.iso);
            res.end(JSON.stringify(result))
            break;
        case UNIX_ENDPOINT:
            res.writeHead(200, {'Content-Type':'application/json'});
            result = getTime('unix', myURL.query.iso);
            res.end(JSON.stringify(result))
            break;
        default:
            res.writeHead(404, {'Content-Type':'application/json'});
            res.end("endpoint does not exist")

    }
});

server.listen(port);
