import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Genre =()=> {

    const [ genres, setGenres] = useState([])

    useEffect(()=> {

        const url = 'http://localhost:3005/api/genre/sort'
        axios.get(url).then(res => setGenres(res.data))
    }, [])

    const genreItems = genres.map(genre => {
        return <li key={genre.genre_id }className="list-group-item">
            <Link to={`/genre/${genre.genre_id}`}>
                {genre.genre}
            </Link>
        </li>
    })

    /*I took out the initial return because i couldnt figure out the reason why i couldnt get my genreSingele working...but hopefully i can figure it out with help..*/

   /*return (
        <aside className="aside genre-aide overflow-y-scroll" id="genreAside">
            <ul className="list-group list-group-flush genre-list">The Ships Genres Baba
                {genreItems}
            </ul>
        </aside>
    )*/
}

export default Genre