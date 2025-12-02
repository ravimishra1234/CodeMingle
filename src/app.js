const express = require('express')

const app = express()

app.use('/hello', (req, res) => {
    res.send("hello hello hello")
})

app.use('/contact', (req, res) => {
    res.send("contact us")
})

app.use('/',(req,res)=>{
    res.send("Home page")
})



app.listen(7777,()=>{
    console.log("Server is running on port number 7777....")
})