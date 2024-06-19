const express = require('express')
const router = express.Router()
const port = process.env.port || 3000

const tables = [
    'album',
    'artist',
    'label',
    'genre',
    'poster',
    'user'
]

//.get 

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
        res.send('<h1>404 Error!! The Mothership has a glitch!</h1>')
    }
})

module.exports = router