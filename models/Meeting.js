const mongoose = require('mongoose')


const meetingSchema = new mongoose.Schema({
    meetName:{
        type:String,
        required:[true,"Meeting name is required"]
    },
    host:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ,
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
    
},
{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
}
)

const Meeting = mongoose.model("Meeting",meetingSchema)
module.exports = Meeting 