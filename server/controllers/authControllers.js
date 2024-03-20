const User = require('../models/user')
const { hashPwd, comparePwd} = require('../helpers/auth')
const crpyt = require('bcrypt')
const jwt = require('jsonwebtoken')

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body
        if (!username) {
            return res.json({
                error: 'Please enter a username'
            })
        }
        if(!password || password.length < 6) {
            return res.json({
                error: 'Please enter a 6 character long password'
            })
        }
        const exist = await User.findOne({ email })
        if (exist) {
            return res.json({
                error: 'Email is already an account realted to'
            })
        }
        const hashedPwd = await hashPwd(password)
        const user = await User.create({
            username, email, password:hashedPwd
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const {username ,password} = req.body

        const user = await User.findOne({username})
        if(!user) {
            return res.json({
                error: 'No user found'
            })
        }

        const match = await comparePwd(password, user.password)
        if (match) {
            jwt.sign({email: user.email, id: user._id, userName: user.username}, process.env.JWT_SECRET,
                {}, (err, token) => {
                    if (err) throw err
                    res.cookie('token', token).json(user)
                })
        }

        if(!match) {
            res.json({
                error: 'passowrd do not match'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const {token} = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

module.exports = {
    test, 
    registerUser,
    loginUser,
    getProfile
}