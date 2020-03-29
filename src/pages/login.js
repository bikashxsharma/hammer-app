import React from 'react';

import { Link } from "react-router-dom";

import logo from "../assets/logo_blue.png"

const login = () => {

    return (
        <div>
            <div className="login-container">
                <div className="login-main">
                    <div className="login-logo">
                        <p>Sign in</p> <span></span>
                        <img src={logo} alt="Hammer logo" />
                    </div>
                    <div className="login-content">
                        <form className="login-form">
                            <div className="form-group">
                                <label className="email-label">Email Address</label>
                                <input type="text" name="email" />
                            </div>

                            <div className="form-group">
                                <label className="password-label">Password
                                <p><a href="/">Forget Password?</a></p>
                                </label>

                                <input type="password" name="password" />
                            </div>

                            <button className="mainCTA">Sign in</button>

                        </form>
                        <p>Not a member? <Link to="/signup">Sign up now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default login;