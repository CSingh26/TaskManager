const express = require('express')
const dotenv = require('dotenv').config()
const mongo = require('mongoose')
const cors = require('cors')
const routes = require('./routes/authRoutes')

const app = express()

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/auth', routes)

//mongodb conn
mongo.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log("Database not connected", err))

//gloabl error
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
})

//server
const port = 2300

app.listen(port, () => {
    console.log(`Sever running on ${port}`)
})