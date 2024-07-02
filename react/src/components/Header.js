import { Link } from "react-router-dom"
import { BsCart } from 'react-icons/bs'/*ask about this*/

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="branding text-capitalize text-center text-md-start">
                            <Link to="/" style={{ textDecoration: 'none'}} id="record1">                            
                            (F.M.R) Funky Mothership Records</Link>
                        </h1>
                    </div>
                    <div className="col-md-4">
                        <nav className="top-nav">
                            <ul className="nav justify-content-center justify-content-md-end">
                                <li className="nav-item me-2">
                                    <Link
                                        to="/about"
                                        style={{textDecoration: 'none', textTransform: 'capitalize'}} id="about"
                                    >About</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link
                                        to="/Poster"
                                        style={{textDecoration: 'none', textTransform: 'capitalize'}} id="poster"
                                    >Posters</Link>
                                </li>
                                <li className="nav-item me-2">
                                    <Link
                                        to='/albums'
                                        style={{textDecoration: 'none', textTransform: 'capitalize'}} id="view">
                                            View the Motherships music  </Link>
                                </li>
                                <li className="nav-item me-2" id="cart">
                                    <BsCart /> Shopping Cart
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <Link
                            to='/login'
                            style={{textDecoration: 'none', marginRight: '20px', textTransform: 'capitalize'}} id="sign">
                                sign in
                            </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to='/createAccount' id="welcome">Start your voyage into the Beyond!</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header


/*const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-1 text-capitalize text-md-center">
                            <Link to='/'>
                                The Mothership records
                            </Link>
                        </h1>
                    </div>
                    <div className="col-md-7">
                        <nav className="nav justify-content-around text-uppercase">
                            <Link to='/artist'>artist</Link>
                            <Link to='/label'>label</Link>
                            <Link to='/genre'>genre</Link>
                            <Link to='/poster'>poster</Link>
                            <Link to='/album'>album</Link>
                            <Link to='/user'>user</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}*/

/*Do not export and edit yet until i can figure out my file structure mistake. Also i need to see if i want to add label links and genre. Site souced by satchwerk*/