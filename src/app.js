const express = require('express')
const connectDB = require('./config/database')
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");
const app = express()
dotenv.config({});
const cors = require('cors')


app.use(
  cors({
    origin: "http://localhost:5174", 
    credentials: true,
  })
);
app.use(express.json())
app.use(cookieParser())

const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const requestRouter = require("./routes/request")
const userRouter = require('./routes/user')

app.use('/', authRouter)
app.use('/', profileRouter)
app.use('/', requestRouter)
app.use('/', userRouter)


connectDB()
.then(()=>{
    console.log("Database connection established")
    app.listen(process.env.PORT, "0.0.0.0", ()=>{
    console.log(`Server running on ` + process.env.PORT);
})
}).catch((err)=>{
    console.error("Database cannot be connected")
})
