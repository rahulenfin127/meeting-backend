const expressAsyncHandler = require("express-async-handler");
const Meeting = require("../models/Meeting");
const User = require("../models/User");
const validateMongodbId = require("../utils/validateMongodbId");


const createMeetingCtrl = expressAsyncHandler(async(req,res) =>{
    try {
        const meeting = await Meeting.create({
            meetName:req?.body?.meetName,
            host:req?.body?.host,
            participants:req?.body?.participants
        })
    } catch (error) {
        res.json(error)
    }
})
