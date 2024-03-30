const mongo = require('mongoose')

const userSchema = new mongo.Schema({
    username: {
        type: String, 
        required: true,
    }, 
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
    }
})

const User = mongo.model('User', userSchema)

module.exports = User