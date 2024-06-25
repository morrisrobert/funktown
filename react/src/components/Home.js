/*Dont export until ive edited and got the file structure done. Site sourced by satchwerk.*/

/*getUTCDAY Get the day of the week using universal coordinated time*/ 

import { useState, useEffect } from 'react';
import axios from 'axios'

const Home =()=> {

    //const [ featuredAlbum, setFeaturedAlbum ] = useState({})

    const [ today, setToday ] = useState(new Date().getUTCDay())

useEffect(()=> {

    axios.get('http://localhost:3000/api/album').then(res => {

        const count = res.data.length

        setFeaturedAlbum(res.data[Math.floor(Math.random() * count)])

    })
}, [today])

return (
    <main className="main" id="main">
        <div className="container">
            <section className="section banner-row">
                <img src="https://via.placeholder.com/50x50" alt="banner image" className="img-fluid image banner-img rounded"/>
            </section>
            <section className="section">
                <h2 className="text-center text-capitalize">The Mothership is Open!</h2>
            </section>
        </div>
    </main>
)
}

export default Home


