const express = require('express');
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'))
var lists=[];
app.listen(3000);
app.get('/', (req,res)=>{
    var date=new Date();
    var options={'weekday':'long','day':'numeric','month':'long'};
    var day=date.toLocaleDateString('en-US',options);
    res.render('list',{DAY:day,items:lists});
});
app.post('/',(req,res)=>{
    lists.push(req.body.new);
    res.redirect('/');
});




