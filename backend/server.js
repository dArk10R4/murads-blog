const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const cookieParser = require('cookie-parser');

var app = express();

app.use(cors({
    origin:'http://localhost:3000',
    credentials: true
}))

app.use(express.json());
app.use(cookieParser());
app.post('/auth/login',(req,res)=>{
    let datas = fs.readFileSync(path.resolve('database.json'));
    datas = JSON.parse(datas);
    let {username, password} = req.body;
    console.log(username,password);
    datas.forEach((e)=>{
        if(e.username == username && e.password === password){
            res.cookie('auth','nihad123',{
                httpOnly: true,
                expires: new Date(Date.now() + 3600000000)
            });
            res.status(200).send()
        }
    });
    res.status(401).send();

});
app.post('/auth/register',(req,res)=>{
    let {username, password} = req.body;
    let a = fs.readFileSync(path.resolve('database.json'));
    a = JSON.parse(a);

    a = [...a,{username,password}];
    fs.writeFileSync(path.resolve('database.json'),JSON.stringify(a));
    res.status(200).send();
    

});
app.post('/posts',(req,res)=>{
    console.log(req.cookies);
    res.send()
})
app.listen(8080,()=>{
    console.log('Express server running on port 8080...');
});

