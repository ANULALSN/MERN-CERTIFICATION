const fs=require('fs')
fs.unlink('ASHER.txt',function(err){
    if(err){
        console.log(err)
        return;
    }
    console.log("Deleted succesfully!!!")
})