const express = require('express');
const path = require('path');
var app = express();

app.use(express.static(path.resolve('public')));
app.get('/',(req,res)=>{
    res.cookie('index','senene',{
        httpOnly: true,
        expires: new Date(Date.now() + 3600)
    });
    res.sendFile(path.resolve('pages/index.html'));
});
app.get('/login',(req,res)=>{
    res.cookie('login','login',{
        httpOnly: true,
        expires: new Date(Date.now() + 3600)
    });
    res.sendFile(path.resolve('pages/login.html'));
});
app.get('/register',(req,res)=>{
    res.cookie('register','esfsdf',{
        httpOnly: true,
        expires: new Date(Date.now() + 3600)
    });
    res.sendFile(path.resolve('pages/register.html'));
});
app.listen(3000,()=>{
    console.log('Express server running on port 3000...');
});