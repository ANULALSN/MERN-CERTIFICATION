const bodyParser = require('body-parser');
const express=require('express');
const cors=require('cors');
const app=express();
const PORT=3000;
const MongoClient=require('mongodb').MongoClient;
const {ObjectId}=require('mongodb');
const pug=require('pug')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}))
app.use(cors());
app.set('view engine','pug');
const url='mongodb://localhost:27017/students';
const dbname='students';
let db;

MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(async client => {
    console.log("Connected to mongodb");
    db=client.db(dbname);
    app.post('/users',async (req,res)=>{
        try{
            const user=req.body;
            // const user={name:'Ram',email:'ram@gmail.com'};
            const result=await db.collection('user').insertOne(user);
            res.send({message:'user created succesfully'});
        }catch(err){
            res.status(500).send({message:'Error creating user'});
        }
    })
    app.get('/users',async (req,res)=>{
        try{
            const users=await db.collection('user').find().toArray();
            console.log(users);
            res.send(users);
        }catch(err){
            res.status(500).send({message:'Error creating user'});
        }
    });
    app.delete('/users/:id',async (req,res)=>{
        try{
            const id=req.params.id;
            if(!ObjectId.isValid(id)){
                res.status(400).send({message:"Invalid id"})
            }
            const result=await db.collection('user').deleteOne({_id:new ObjectId(id) });
            res.send({message:'user deleted succesfully'});


        }catch(err){
            res.status(500).send({message:'Error fetching user'}); 
        }

    })
    app.put('/users/:id',async (req,res)=>{
        try{
            const id=req.params.id;
            if(!ObjectId.isValid(id)){
                res.status(400).send({message:"Invalid id"})
            }
            const result=await db.collection('user').updateOne({_id:new ObjectId(id) });
            res.send({message:'user updated succesfully'});


        }catch(err){
            res.status(500).send({message:'Error updating user'}); 
        }

    })
    app.listen(PORT,()=>{
        console.log(`Listening on ${PORT}`);
    })
    
})
.catch(err=>{
    console.log(err);
}
    
)