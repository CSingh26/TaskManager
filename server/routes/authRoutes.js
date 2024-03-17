const express = require('express')
const router = express.Router()
const cors = require('cors')
const {test, registerUser} = require('../controllers/authControllers')

router.use(
    cors({
        credentials: true,
        origin: 'https://localhost:3000'
    })
)

router.get('/', test)
router.post('/signup', registerUser)

module.exports = router