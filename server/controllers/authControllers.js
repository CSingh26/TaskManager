const User = require('../models/user')
const exist = false

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body
        exist = await User.findOne(username) 
        if (exist) {
            return res.json({
                error: 'Username is already taken'
            })
        }
        if(!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be 6 characters long'
            })
        }
        exist = await User.findOne(email)
        if (exist) {
            return res.json({
                error: 'Email is already an account realted to'
            })
        }
        const user = await User.create({
            username, email, password
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test, 
    registerUser
}