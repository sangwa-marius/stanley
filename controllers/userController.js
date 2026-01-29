const user = require('../models/users');
const bcrypt = require('bcrypt');
const passport = require('passport');
const initialize = require('../config/passportConfig');

const getRegister =(req,res)=>{
    res.render('register.ejs')
}

const getLogin = (req,res)=>{
    res.render('login.ejs')
}

const registerNewUser = async (req,res)=>{
   try {
    const hashedPassword = await  bcrypt.hash(req.body.password,10);
    const newUser = {
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
    }
    await user.create(newUser);
  
    console.log(user)
    res.redirect('/login');
    
} catch (error) {
    
}
}

const login = async(req,res)=>{
    const user = await user.find();
    initialize(
        passport,
        email => user.email === email
    )
    
        

}

module.exports = {
    getRegister,
    getLogin,
    registerNewUser, 
    login
}

