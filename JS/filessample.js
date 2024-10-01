var fs=require('fs');
fs.readFile('task.txt',function(err,data){
    if(err){
        console.error(err);
        return;
    }
    console.log(data.toString());

});
fs.appendFile('task.txt','Adding more lines to text',function(err){
    if(err){
    console.error(err)
}
console.log('File overwritten successfully');
})
fs.unlink('task.txt',function(err){
    if(err){
        console.log(err)
        return;
    }
    console.log("Deleted succesfully!!!")
})
// example for asynchronous non blocking it does'nt block the execution of others
console.log('hi goooys');//it prints first without any block