import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Genre =()=> {

    const [ genres, setGenres] = useState([])

    useEffect(()=> {

        const url = 'http://localhost:3000/api/genre/sort'
        axios.get(url).then(res => setGenres(res.data))
    }, [])

    const genreItems = genres.map(genre => {
        return <li key={genre.genre_id }className="list-group-item">
            <Link to={`/genre/${genre.genre_id}`}>
                {genre.genre}
            </Link>
        </li>
    })

    return (
        <aside className="aside genre-aide overflow-y-scroll" id="genreAside">
            <ul className="list-group list-group-flush genre-list">
                {genreItems}
            </ul>
        </aside>
    )
}

export default Genre