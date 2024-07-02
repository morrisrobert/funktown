const con = require('../../config/dbconfig')

const albumDao = {

    table: 'album',

    findAlbums: (req, res, table)=> {
        con.execute(
            `SELECT al.album_id, al.title, al.artist_id, al.genre_id, al.label_id, al.yr_released, al.price, al.imgUrl, ar.alias, l.label
            FROM album al
            JOIN artist ar USING (artist_id)
            JOIN label l USING (label_id)
            JOIN genre g USING (genre_id);`,
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
    },
        findById: (req, res, table)=> {

            const id = req.params.id

            con.execute(
                `SELECT al.album_id, al.title, al.artist_id, al.genre_id, al.label_id, al.yr_released, al.price, al.imgUrl
                FROM album al
                JOIN artist ar USING (artist_id)
                JOIN label l USING (label_id)
                JOIN genre g USING (genre_id);
                WHERE al.${table}_id = ${id};`,
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
        }, 

        sort: (req, res, table)=> {

            con.execute(
                `SELECT * FROM ${table} ORDER BY title;`,
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

    module.exports = albumDao