const fn = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];
fn(dir, ext, (err, data)=>{
    if(err){
        console.log('error',error)
    }else{
        const list = data;
        list.forEach(item=>{
            console.log(item)
        })

    }
})