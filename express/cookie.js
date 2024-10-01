const express=require('express')
const cookieParser=require('cookie-parser')
const app=express();
const PORT=4000;
app.use(cookieParser());
app.get('/setcookie',(req,res)=>{
    res.cookie('username','german')
    res.send('Cookie has been set')

});

app.get('/getcookie',(req,res)=>{
    let username=req.cookies['username'];
    if(username){
        res.send(`cookie received:${username}`);

    }
    else{
        res.send('No cookie found');
    }

})
app.listen(PORT,()=>{
    console.log(`app listening on port:${PORT}`)
})