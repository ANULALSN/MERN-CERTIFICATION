const path = require('path');
const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const PORT=3000;

app.set('views',path.join(__dirname,'views'));
// app.set('public',path.join(__dirname,'public'));
//set pug as view engine
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended:true}))
app.set('view engine','pug');
items=['item1','item2','item3']
app.get('/home',(req,res)=>{
    res.render('index',{title:'Express &pug tutorial',message:'Welcome to the pug template engine',items})
});
app.get('/layout',(req,res)=>{
    res.render('layout_ex',{title:'Namaskaaaram',message:'Welcome to the pug template engine'})
});
app.get('/form',(req,res)=>{
    res.render('form')
});
app.post('/result',(req,res)=>{
    const {name,email,age,gender,phone,message}=req.body;
    res.render('result',{title:"Response",name,phone,message,terms,email,age,gender})

   
})
app.listen(PORT,()=>{
    console.log("Server running");
});