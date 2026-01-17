const mongoose = require('mongoose')

const connectionRequestSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // refrence to the user collection
        required: true,
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: {
            values: ["ignored", "interested", "accepted", "rejected"],
            message: `{VALUE} is incorrect status type`
        }
    }
},
{ timestamps: true, }
) 

connectionRequestSchema.index({fromUserId: 1, toUserId: 1})

connectionRequestSchema.pre("save", async function(){
    // check if the fromUserId is same as toUserId
    if (this.fromUserId.equals(this.toUserId)){
        throw new Error("Cannot send connection request to yourself!!")
    }
})

const ConnectionRequestModel = new mongoose.model("ConnectionRequest", connectionRequestSchema)

module.exports =  ConnectionRequestModel