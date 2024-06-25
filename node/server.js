/*Need to create a server so i can check my progress. Im using the node-albums as refrence from KChatt*/

const express = require('express')
const server = express()
const cors = require('cors')//ask about why cors
const helmet = require('helmet')
const router = require('./app/routes/router')//check my folder layout to make sure its working properly
const port = process.env.port || 3005 // this is my port
/*const axios = require('axios')*/

//again helmet handles images and scripts. 
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

//localhost:3000
server.use('/', router)



//call back function for checking my stuff
server.listen(port, ()=> console.log(`Port ${port} is Aqua boogie baby...`));