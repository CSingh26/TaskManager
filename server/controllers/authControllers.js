const User = require('../models/user')

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