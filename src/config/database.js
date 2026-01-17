const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://helloDev:Htu0vrABV4eoXoX6@hellonode.00auvmn.mongodb.net/codeMingle")
}

module.exports = connectDB