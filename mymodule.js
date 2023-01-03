const fs = require('fs');
const path = require('node:path')
module.exports = function(dir, fileExt, cb){
    const newExt = "."+fileExt;
    fs.readdir(dir,(err,files)=>{
        if(err){
            cb(err, null)
        }else{
            const result = [];
            files.forEach(file=>{
                if(path.extname(file)==newExt){
                    result.push(file)
                }
            })
            cb(null, result)
        }
    })
}