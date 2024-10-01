let promise=new Promise((resolve,reject)=>{
setTimeout(()=>{
    let success=false;
    if(success){
        resolve('operation succesful')
    }
    else{
        reject('operation failed')
    }
},2000);

})
promise.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})