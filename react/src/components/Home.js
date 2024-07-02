/*Dont export until ive edited and got the file structure done. Site sourced by satchwerk.*/

/*getUTCDAY Get the day of the week using universal coordinated time*/ 

import { useState, useEffect } from 'react';
import axios from "axios"
import AlbumSingle from './AlbumSingle';


const Home =()=> {

    const [ featuredAlbum, setFeaturedAlbum ] = useState({})

    const [ today, setToday ] = useState(new Date().getUTCDay())

useEffect(()=> {

    axios.get('http://localhost:3005/api/album').then(res => {

        const count = res.data.length

        setFeaturedAlbum(res.data[Math.floor(Math.random() * count)])

    })
}, [today])

return (
    <main className="main" id="main">
        <div className="container">
            <section className="section banner-row">
                <img src="https://i.makeagif.com/media/10-26-2015/6EIID5.gif" className='gif' id='gif1' width="100%" height="10%"></img>
            </section>
            <section className="section">
                <h2 className="text-center text-capitalize" id='open'>The Mothership has Landed!</h2>
                <iframe width="100%" height="20%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/301326822&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" className='frame1' id='frame1'></iframe>
            </section>
        </div>
    </main>
)
}

export default Home


