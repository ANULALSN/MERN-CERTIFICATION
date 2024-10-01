const fs=require('fs')
fs.mkdir('newdir',function(err){
    if(err){
        console.error(err)
        return;
    }
    console.log("Success")
})