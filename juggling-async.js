const http = require('http');

let numUrls = process.argv.length - 2;
const urls = process.argv.slice(2);
const results = Array(numUrls).fill(null);
let completeCount = 0;

function printAll(){
    results.forEach(item=>{
        console.log(item)
    })
}
urls.forEach((url,index)=>{
    http.get(url, (response)=>{
        let result = "";
        response.setEncoding("utf8")
        response.on("data",(data)=>{
            result+=data;
        })
        response.on("end",()=>{
            results[index] = result;
            completeCount++;
            if(completeCount==numUrls){
                printAll();
            }
        })
    });
})

