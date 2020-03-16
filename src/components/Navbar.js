import React from 'react';
import logoSmall from '../assets/logo_white.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar-items">

                    <img className="logo" src={logoSmall} component={Link} to='/' alt="kaamyabi small logo" />
                    <div className="nav-cta text-bold" component={Link} to='/login'><Link to='/login'>Sign in</Link></div>

                </div>
            </div>

        </div>
    )


}

export default Navbar;