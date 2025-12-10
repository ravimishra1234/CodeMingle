const express = require('express')

const app = express()
const {adminAuth , userAuth}=require("./middlewares/auth")

// ! this will match all the http method API call to /user
app.use('/admin',adminAuth)

app.use("/user" , userAuth , (req,res)=>{
    res.send("All data sent")
})

app.use("/admin/getAllData" , (req,res)=>{
    res.send("All data sent")
})

app.use("/admin/deleteUser",(req,res)=>{
    res.send("Deleted a user")
})



app.listen(7777,()=>{
    console.log("Server is running on port number 7777....")
})