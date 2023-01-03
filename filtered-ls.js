const fs = require('fs');
const path = require('node:path')
const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, (err,files)=>{
    if(err){
        console.log('error',err);
    }else{
        files.forEach(file=>{
            if(path.extname(file)==`.${ext}`){
                console.log(file)
            }
        })
    }
})