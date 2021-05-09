const express = require('express');

const app = express();
const port = process.env.PORT||3000;

app.set('view engine','ejs');

//home route
app.get("/",(req, res)=>{
    res.render('base',{title:"login system"})
    // console.log("home route just hit")
}).listen(port,()=>{
    console.log("server running on " + port)
})