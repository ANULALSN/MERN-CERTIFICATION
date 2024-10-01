const express=require('express')
const session=require('express-session')
const cookieParser=require('cookie-parser')
const path=require('path')


const app=express();
const PORT=4000;
app.use(express.static('public'))
app.use(express.urlencoded());
app.use(cookieParser());
app.use(session({
    secret:'mysecretkey',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    if(email=='admin@gmail.com' && password=='admin'){
        req.session.isLoggedIn=true;
        res.redirect('/dashboard');
    }
    else{
        res.send('Invalid credentials');
    }
})
app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err)
        }
        else{
            res.clearCookie('role');
            res.send('You are now logged out')
        }
    })
})
app.get('/dashboard',(req,res)=>{
    if(req.session.isLoggedIn){
        if(req.cookies.role === 'admin'){
            res.send('Hi admin welcome to dashboard');
            
        }else{
            res.send('welcome to dashboard')
        }
    }
    else {
        res.send('Access denied.Please login first');
    }
})
app.get('/setcookie',(req,res)=>{
    res.cookie('role','admin',{maxAge:900000,httpOnly:true});
    res.send('cookie has been set')
})
// app.get('/signin',(req,res)=>{
//     res.sendFile(path.join(__dirname,'signin.html'));
// })
app.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'signin.html'))
})
app.listen(PORT,()=>{
    console.log(`app listening on port:${PORT}`)
})