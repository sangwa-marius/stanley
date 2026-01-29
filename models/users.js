const mongoose = require('mongoose');

users = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
        },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
        },

    password:{
        type:String,
        required:true,
    }    
})

module.exports = mongoose.model('user',users);