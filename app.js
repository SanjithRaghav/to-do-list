const express = require('express');
const bodyParser = require('body-parser');
const date=require(__dirname+'/date.js');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'))
var lists=[];
app.listen(3000);
app.get('/', (req,res)=>{
   console.log(date);
   var day=date.hindDate();
    res.render('list',{DAY:day,items:lists});
});
app.post('/',(req,res)=>{
    lists.push(req.body.new);
    res.redirect('/');
});




