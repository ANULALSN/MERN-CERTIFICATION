const express=require('express')
const session=require('express-session')
const app=express();
const PORT=4000;
app.use(session({
    secret:'mysecretkey',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))
app.get('/setsession',(req,res)=>{
    req.session.user='German';
    res.send('session has been set');
})
app.get('/getsession',(req,res)=>{
    if(req.session.user){
        res.send(`session user:${req.session.user}`)
    }
    else
    {
        res.send('No session found')
    }
});
app.get('/destroysession',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.send('Error destroying session')
        }
        res.send('Session destroyed')

    })
})
app.listen(PORT,()=>{
    console.log(`app listening on port:${PORT}`)
})