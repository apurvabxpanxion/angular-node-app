var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var mongojs = require('mongojs');
mongoose.Promise = Promise;
var auth = require('./auth.js');

var posts = [
  {message: 'Hello'},
  {message: 'Hi'}
];

app.use(cors());
app.use(bodyParser.json());

app.get('/posts' , (req,res) =>{
    res.send(posts);
})

app.get('/users' , async (req,res) =>{
    try{
        var users = await User.find({}, '-password -__v');
    res.send(users);
    } catch(error){
        console.error(erroe);
        res.sendStatus(500);
    }
    
})

app.get('/profile/:id' , async (req,res) =>{
    try{
        var user = await User.findById(req.param.id, '-password -__v');
    res.send(user);
    } catch(error){
        console.error(erroe);
        res.sendStatus(500);
    }
    
})

// app.post('/register' ,)

// app.post('/login' ,)

mongoose.connect('mongodb://test:test@ds121599.mlab.com:21599/messageboard', (err) => {
    if(!err)
        console.log('connected to mongo')
})

app.use('/auth', auth)
app.listen(3000);

