const express = require('express')

const app = express()

// ! this will match all the http method API call to /user
app.use('/user',[
    (req,res,next)=>{
    // res.send("Route handler 1!")
    console.log("response successfully sent to the server")
    next()
    // res.send("Route handler 1!")
},(req,res,next)=>{
    console.log("response successfully sent to the server from 2nd route handler")
    // res.send("Route handler 2!")
    next()

}],(req,res,next)=>{
    // res.send("Route handler 3!")
    console.log("response successfully sent to the server by 3rd route handler")
    next()
},(req,res,next)=>{
    // res.send("Route handler 4!") 
    console.log("response successfully sent to the server by 4th route handler")
    next()
},(req,res)=>{
    console.log("response successfully sent to the server by 5th route handler")
    res.send("Route handler 5!") 
   
}    
 )


app.listen(7777,()=>{
    console.log("Server is running on port number 7777....")
})