import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
//axios.post("http://localhost:3000/register", data)

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Store from "./components/Store"
import AlbumSingle from "./components/AlbumSingle"
import Genre from "./components/Genre"
import ErrorPage from "./components/ErrorPage"
import CreateAccount from './components/CreateAccount'


/*Im Reall trying to understand whats going on here lol. I understand some but def not all of it. This is the first time Ive done an App like this to my knowledge. If not i dont remember when. The kind im used to is at the bottom.

sourced by Satchwerk and KChat*/
const App =()=> {
/*Albumsingle was changed from album....i dont think this is correct*/
    const [ album, setAlbum ] = useState([])
    const [ poster, setPoster ] = useState([])
    const [ users, setUsers ] = useState([])
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
    })

    useEffect(()=> {
        const url = 'http://localhost:3000/api/album'

        axios.get(url).then(res => setAlbum(res.data))
    }, [])

    useEffect(()=> {
        const url = 'http://localhost:3000/api/poster'

        axios.get(url).then(res => setPoster(res.data))
    }, [])

    useEffect(()=> {
        const url = 'http://localhost:3000/Users'

        axios.get(url).then(res => setUsers(res.data))
    }, [])

    const handleChange =(event)=> {

        const { name, value } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =()=> {
        let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        /*WHATTTTT IS THAT..Update...Regex is used for matching patterns in strings, find and replace, input validation, and reforming text. But i still dont understand the syntax...looks like someone smashed thier face in. Source is from How-to Greek */

        if(regex.test(formData.password) === false) {
            alert('Password not valid.\nMust contain:\n-one uppercase letter\n-one lowercase letter\n-one number\n-one special character\n-at leaset 8 characters')
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/user/create',
                data: formData
            })
        }
    }

    return(
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-10'>
                        <Routes>
                            <Route path='/' element={ <Home />} 
                            />
                            <Route path="/about" element={ <About />} 
                            />
                            <Route path="/poster" element={ <Store products={ poster } heading={ 'poster'}  />} 
                            />
                            <Route path="/album" element={ <Store products={ album } heading={ 'vinyl' } />} 
                            />
                            <Route path="/vinyl/:id" element={ <AlbumSingle />} 
                            />
                            <Route
                                path='/creatAccount'
                                element={ <CreateAccount
                                            formData={formData}
                                            handleChange={handleChange}
                                            handleSubmit={handleSubmit}
                                />}
                            />
                            <Route path="*" element={ <ErrorPage /> } 
                            />
                        </Routes>
                    </div>
                    <div className='col-2'>
                        <Genre />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App




/* 
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Genre from "./components/Genre"
import ErrorPage from "./components/ErrorPage"
import CreateAccount from './components/CreateAccount'

const App=()=> {
    
    return (
        <>
            <Header />
            <Home />
            <Footer />
            <About />
            <Genre />
            <ErrorPage />
            <CreateAccount />
        </>    
    )
        
}

export default App */ 