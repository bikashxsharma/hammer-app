import React from 'react';
import { useDispatch } from 'react-redux'
import logoSmall from '../assets/logo_white.png'
import { Link } from 'react-router-dom'
import userLogout from '../actions/userLogout'

const Navbar = () => {

    const dispatch = useDispatch();
    const logout = () => {
        dispatch(userLogout())
    }

    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar-items">

                    <img className="logo" src={logoSmall} component={Link} to='/' alt="kaamyabi small logo" />
                    <div className="nav-cta text-bold" onClick={() => logout()}>Logout</div>

                </div>
            </div>

        </div>
    )


}

export default Navbar;