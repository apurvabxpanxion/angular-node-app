var User = require('./models/User.js');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var express = require('express');
var router = express.Router();


   router.post('/register' , (req,res) =>{
        var userData = req.body;
        var user = new User(userData);
    
        user.save((err, result) =>{
            if(!err) 
                console.log("There is error");
            
            res.sendStatus(200);
        })
       
    }),

    router.post('/register' ,  async (req,res) =>{
        var loginData = req.body;
        var user = await User.findOne({email: userData.email});
    
        if(!user)
        return res.status(200).send({message:"Email or Password is not valid"});
        
        bcrypt.compare(loginData.password, user.password, (err, isMatch)=>{
            if(!isMatch)
            return res.status(200).send({message:"Email or Password is not valid"});
            var payload = {}
            var token = jwt.encode(payload, '123') 
            res.status(200).send({token});
        })
      
    }
    )

module.exports = router