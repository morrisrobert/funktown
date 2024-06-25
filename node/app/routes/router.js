const express = require('express')
const router = express.Router()
const port = process.env.port || 3005

const tables = [
    'album',
    'artist',
    'label',
    'genre',
    'poster',
    'user'
]

//.get...My 'req' is declared but its value is not read. Im trying to figure out why. Google is telling me everything but what i need lol 

router.get('/', (req, res)=> {
    res.json({
        'All Albums': `http://localhost:${port}/api/album`,
        'All Artist': `http://localhost:${port}/api/artist`,
        'All Labels': `http://localhost:${port}/api/label`,
        'All Genre': `http://localhost:${port}/api/genre`,
        'All Poster': `http://localhost:${port}/api/poster`,
        'All Users': `http://localhost:${port}/api/user`
    })
})

tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

router.get('*', (req, res)=> {
    if (req.url == '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 Error!! The Mothership has a glitch! Its in router.js</h1>')
    }
})

module.exports = router