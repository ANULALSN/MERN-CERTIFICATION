const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const MongoClient=require('mongodb').MongoClient;
const PORT=3000;
const app=express();

const {ObjectId}=require('mongodb');
const pug=require('pug')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}))
app.use(cors());
app.set('view engine','pug');
const url='mongodb://localhost:27017/blogapp';
const dbname='blogapp';
let db;
MongoClient.connect(url,{useNewUrlparser:true,useUnifiedTopology:true}).then(async client => {
    console.log("Connected to mongodb");
    db=client.db(dbname);
    app.post('/blogapp',async (req,res)=>{
        try{
            const content=req.body;
            
            const result=await db.collection('contents').insertOne(content);
            res.send({message:'Content inserted succesfully'});
        }catch(err){
            res.status(500).send({message:'Error inserting Content'});
        }
    });
    app.get('/blogapp',async (req,res)=>{
        try{
            const content=await db.collection('contents').find().toArray();
            console.log(content);
            res.send(content);
        }catch(err){
            res.status(500).send({message:'Error displaying content'});
        }
    });
    app.get('/blogapp/:id',async (req,res)=>{
        try{
            const content=await db.collection('contents').findOne({_id:new ObjectId(req.params.id)})
            console.log(content);
            res.send(content);
        }catch(err){
            res.status(500).send({message:'Error displaying content'});
        }
    });
    app.post('/blogapp/createuser',async (req,res)=>{
        try{
            const content=req.body;
            // const user={name:'Ram',email:'ram@gmail.com'};
            const result=await db.collection('contents').insertOne(content);
            res.send({message:'content created succesfully'});
        }catch(err){
            res.status(500).send({message:'Error Inserting Content'});
        }
    })
    
      
    app.listen(PORT,()=>{
        console.log(`Listening on ${PORT}`);
    })
})