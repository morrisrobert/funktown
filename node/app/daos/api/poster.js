const con = require('../../config/dbconfig')

const posterDao = {
    table: 'poster',

    sort: (req, res, table)=> {

        con.execute(
            `SELECT * FROM ${table} ORDER BY poster;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                 } else {
                    console.log('DAO ERROR: ', error)
                 }
            }
        )
    }
}

module.exports = posterDao