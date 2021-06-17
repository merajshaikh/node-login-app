const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const session = require('express-session')
const {v4: uuidv4} = require('uuid')

// seprated route module imported here
const router = require('./router')

const app = express();
const port = process.env.PORT||3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine','ejs');

// load static files using path modules and express

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(session({
    secret: uuidv4(),
    resave:false,
    saveUninitialized: true
}))

app.use('/route',router)

//home route
app.get("/",(req, res)=>{
    res.render('base',{title:"Login system"})
    // console.log("home route just hit")
}).listen(port,()=>{
    console.log("server running on http://localhost:" + port)
})