const express = require('express')
const router = express.Router();

const credentials = {
    email : "admin@gmail.com",
    pass : "admin"
}

// login user

router.post('/login',(req, res)=>{

    if(req.body.email == credentials.email && req.body.password == credentials.pass){
        req.session.user = req.body.email
        res.redirect('/route/dashboard')
        // res.end("logged in")
    }else{
        res.end("Invalid Username or password")
    }
})


//route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user: req.session.user })
    
    }else{
        res.send("Unauthorized User")
    }
})

// route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send("Error"+ err)
        }else{
            res.render('base',{title:"express,", logout: "logged out successfully...!"})
        }
    })
})

// exporting this module 
module.exports = router;