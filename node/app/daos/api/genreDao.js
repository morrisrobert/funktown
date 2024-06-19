const con = require('../../config/dbconfig')

const genreDao = {
    table: 'genre',

    getAlbums: (req, res)=> {
        const id = req.params.id

        con.execute(
            `SELECT al.album_id, al.title, al.artist_id, al.yr_released, al.price, al.imgUrl, g.genre
            FROM album al
            JOIN artist ar USING (artist_id)
            WHERE g.genre_id = ${id};`,
            (errors, rows)=> {
                if (!error){
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

    },


    sort: (req, res, table)=> {

        con.execute(
            `SELECT * FROM ${table} ORDER BY genre;`,
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

module.exports = genreDao