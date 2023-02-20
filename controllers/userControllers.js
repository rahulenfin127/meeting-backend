const expressAsyncHandler = require('express-async-handler')
const User = require('../models/User')
const validateMongodbId = require('../utils/validateMongodbId')
const axios = require('axios')
const { response } = require('express')
const generateToken = require('../config/generateToken')
const { createUserSchema,loginUserSchema } = require('../utils/validateBody')


const userRegisterCtrl = expressAsyncHandler(async (req, res) => {
    
    try {
        const parsedData = await createUserSchema.validate(req.body)
        const { firstName,lastName, email, password } = parsedData
        const userExists = await User.findOne({ email })
        if (userExists) {
            res.json( {
                "success": false,
                "message": "user already exists",
                "data": {}
            })
        }
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })
        res.json({
            "success": true,
            "message": "User registered successfully",
        })  
    } catch (error) {
        res.json( {
            "success": false,
            "message": error,
            "data": {}
        })
    }
})

const loginUserCtrl = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body
    const userFound = await User.findOne({ email })
    if (userFound && (await userFound.isPasswordMatched(password))) {
        res.json({id:userFound?._id,
            name:userFound?.name,
            email:userFound?.email,
            isAdmin:userFound?.isAdmin,
            token:generateToken(userFound?._id)})
    }
    else {
        res.status(401)
        throw new Error("Invalid credentials")
    }
})

const fetchUserDetailsCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req.user
    validateMongodbId(id)
    try {
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        res.json(error)
    }
})




module.exports = { loginUserCtrl, userRegisterCtrl, fetchUserDetailsCtrl}
