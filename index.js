
// importing packages
require('dotenv').config() 
const express = require('express')
const cors = require('cors')

// creating server
const testServer = express()

// importing router
const router = require('./routes/router')
// import connection.js file
require('./database/dbConnection')

// enable data sharing using cors
testServer.use(cors())

// parse data from client request
testServer.use(express.json())
testServer.use(router)

// create port for the application
const PORT = 3000 || process.env.PORT

// running server on the specified port
testServer.listen(PORT, ()=>{
    console.log(`testServer started at port ${PORT} and waiting for client request !!!`);
})

// resolving get request
testServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:purple;">pfServer Started at port and waiting for client request!!!</h1>`)
})