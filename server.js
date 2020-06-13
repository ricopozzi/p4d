const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
require('dotenv/config')


mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(process.env.PORT, ()=>{
    console.log(`Server Running on port ${process.env.PORT}`)
})
