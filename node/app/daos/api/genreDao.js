const con = require('../../config/dbconfig')

const genreDao = {
    table: 'genre',

    getAlbums: (req, res)=> {
        const id = req.params.id

        con.execute(
            `SELECT al.album_id, al.title, al.artist_id, al.yr_released, al.price, al.imgUrl, g.genre
            FROM album al
            JOIN artist ar USING (artist_id)
            JOIN album_to_genre ON al.album_id = album_to_genre.album_id
            JOIN genre g ON album_to_genre.genre_id = g.genre_id
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