var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email : String,
    password : String,
    name : String,
    description: String
   
});
var User = mongoose.model('User', UserSchema);



UserSchema.pre('save',function(next){
    var user = this

    if(!user.isModified('password'))
     return next()

     bcrypt.hash(user.password, null, null, (err, hash) =>{
        if(err) return next(err)
        user.pwd = hash
        next()
     })
})
module.exports = User;