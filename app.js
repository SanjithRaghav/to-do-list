const express = require('express');
const bodyParser = require('body-parser');
const date=require(__dirname+'/date.js');
const app=express();


const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoDB',{useNewUrlParser:true});
const todoSchema=new mongoose.Schema(
    {   name:String,
        lists:[String]}
    );
const todo=mongoose.model('Todo', todoSchema);

// var work={name:'sanjith',lists:[]};

// todo.insertMany(work);



app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'))
var lists=[];
app.listen(3000);
app.get('/', (req,res)=>{
    todo.findOne({name:'sanjith'},(err,data)=>{
        if(err){
            console.log("coudn't find data" );
        }
        else{
            if(data){
                var day=date.engDate();
                res.render('list',{DAY:day,items:data.lists});
            }
        }
    })
   
});
app.post('/delete', function(req, res){
    console.log(req.body);
    todo.updateOne({name:'sanjith'},{$pull:{lists:req.body.delete}},function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);
        }
    });
    res.redirect('/');
})
app.post('/',(req,res)=>{
    todo.findOneAndUpdate({name:'sanjith'},{$push:{lists:req.body.new}}, 
    function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);
        }
    });
    lists.push(req.body.new);
    res.redirect('/');
});




