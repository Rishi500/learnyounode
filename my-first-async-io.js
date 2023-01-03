const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, (err, data)=>{
    if(!err){
        const str = data.toString();
        const numLines = str.split("\n").length-1;
        console.log(numLines)
    }
})