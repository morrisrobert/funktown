const mysql = require('mysql2')

const pool = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'rmorris',
    password: 'Nevalost1!',
    database: 'funkmothership'
})

module.export = pool