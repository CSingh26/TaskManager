const User = require('../models/users')
const createError = require('../utills/appError')
const bcrpyt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//signup user
exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email})

        if(user) {
            return next(new createError('Email-Id already in use!', 400))
        }

        const hashedPwd = await bcrpyt.hash(req.body.password, 15)

        const newUser = await User.create({
            ...req.body,
            password: hashedPwd,
        })
        const token = jwt.sign({_id: newUser._id}, process.env.KEY, {
            expiresIn: '90d'
        })

        res.status(201).json({
            status: 'success',
            message: 'User register successfully',
            token,
        })
    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    try {
        const {username, password} = req.body

        const user = await User.findOne({ username })

        if (!user) return next(new createError("User not found!", 404))

        const isPwdValid = await bcrpyt.compare(password, user.password)

        if(!isPwdValid) {
            return next(new createError('Incorrect username or password', 401))
        }

        const token = jwt.sign({ id: user._id}, process.env.KEY, {
            expiresIn: "90d"
        })

        res.status(200).json({
            status: 'success',
            token,
            message: 'User Logged In',
            user:{
                _id:user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        next(error)
    }
}