import React from 'react';

import { Link } from "react-router-dom";

import logo from "../assets/logo_blue.png"
import fblogo from "../assets/fb-logo.png"

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
                        <div className="facebook-button">
                            <img src={fblogo} alt="facebook logo" />
                            <p>Continue with Facebook</p>
                        </div>
                        <p className="line"><span>or</span></p>
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
                        <p>Not a member? <a href=""><Link to="/signup">Sign up now</Link></a></p>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default login;