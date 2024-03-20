const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log("Database not connected", err))

app.use(express.json())

app.use('/', require('./routes/authRoutes'))

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}


app.use(express.urlencoded({extended: false}))

app.use(cors(corsOptions));

const port = 2000
app.listen(port, () => console.log(`Server is running on ${port}`))