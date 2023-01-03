if(process.argv.length>2){
    let sum = 0;
    process.argv.forEach((val,index)=>{
        if(index>=2){
            sum += Number(val);
        }
    })
    console.log(sum)
}