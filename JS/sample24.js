var fs=require('fs');
// fs.readFile('ASHER.txt',function(err,data){
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());

// });

// fs.writeFile('ASHER.txt','undedaaaa!!!! und',function(err){
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('File written successfully');
//     const data=fs.readFileSync('ASHER.txt');
//     console.log(data.toString());
// });
fs.writeFileSync('ASHER.txt','podeiiiii!!!! und')
fs.appendFile('ASHER.txt','sugamalle moneeeee',function(err){
    if(err){
    console.error(err)
}
console.log('File overwritten successfully');
})
// console.log('File written successfully');