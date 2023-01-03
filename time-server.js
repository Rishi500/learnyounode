const net = require('node:net')
const port = process.argv[2];

function append0(num){
    if(num<10){
        return `0${num}`;
    }
    return num;
}

const server = net.createServer(function(socket){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const dd = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const data = `${year}-${append0(month)}-${append0(dd)} ${append0(hour)}:${append0(min)}\n`
    socket.write(data);
    socket.end();
});

server.listen(port)