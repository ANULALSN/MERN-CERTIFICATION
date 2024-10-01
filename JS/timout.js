function greet(name,callback){
    console.log('hello'+name);

    setTimeout(()=>{
        callback();
    },2000);
}

greet('Alice',()=>{console.log("happens after 2 seconds")})