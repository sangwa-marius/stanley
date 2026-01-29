const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter')
const app = express();
const flash = require('express-flash');
const session = require('express-session')
mongoose.connect('mongodb://localhost:27017/ejs')
app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended:false}))
// app.use(flash());
// app.use(session({
//     secret : process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))

// app.use(passport.initialize());
// app.use(passport.session());

app.get('/',(req,res)=>{
    res.render('index.ejs',{name:'SANGWA Marius'})
});

app.use('/', userRouter);
app.listen(4500,()=>{
    console.log('server running')
})