const path=require('path')
const express=require('express');
const app=express()
const port=3000
app.use(express.static('public'))
app.use(express.urlencoded());
const fs=require('fs')
// app.get('/news',(req,res)=>{
//     res.send('News Page')
// })
// app.post('/news',(req,res)=>{
//     res.send('News Posted')
// })
// app.put('/news',(req,res)=>{
//     res.send('News edited')
// })
// app.delete('/news',(req,res)=>{
//     res.send('News deleted!')
// })
app.get('/news',(req,res)=>{
    res.sendFile(path.join(__dirname,'news.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'))
})
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'sample.html'))
})
app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'public/images/Capture.PNG'));
})
app.get('/syllabus',(req,res)=>{
res.sendFile(path.join(__dirname,'syllabus.html'))
});
app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'public/document/file-sample_150kB.pdf'));
})
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'register.html'))
})
app.post('/submit',(req,res)=>{
    formData=req.body;
    first_name=formData.first_name;
    last_name=formData.last_name;
    email=formData.email;
    gender=formData.gender;
    qual=formData.quali;
    state=formData.state;
    address=formData.address;
    console.log(`Name: ${first_name}+${last_name}`);
    console.log(`Email: ${email}`);
    console.log(`Gender: ${gender}`);
    console.log(`Qualification: ${qual}`);
    console.log(`State: ${state}`);
    console.log(`Address: ${address}`);

})
app.post('/message',(req,res)=>{
    messageData=req.body;
    Name=messageData.name;
    Email=messageData.email;
    Message=messageData.message;
    fs.appendFile('msg1.txt','',(err)=>{
        if (err){
            console.error(err);
            res.status(500).send('Error writing file')
        }
        else {
            Object.keys(messageData).forEach((key)=>{
                const data=`${key}:${messageData[key]}\n`
                fs.appendFile('msg1.txt',data,(err)=>{
                    if(err){
                        console.error(err)
                    }
                })
            });
            res.send("form submitted successfully");
        }
    })
  
    // fs.appendFile('msg2.txt',Name,(err)=>{
    //     if (err){
    //         console.error(err);
    //         res.status(500).send('Error writing file')
    //     }
    //     else {
          
    //         res.send("form submitted successfully");
    //     }
    // })


    // fs.writeFileSync('message.txt',`${Name}`);
    // fs.appendFileSync('message.txt',`${Email}`);
    // fs.appendFileSync('message.txt',`${Message}`);
})

// app.get('/about',(req,res)=>{
//     res.send('About page!')
// })

// app.get('/contact',(req,res)=>{
//     res.send('Contact page!')
// })

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})