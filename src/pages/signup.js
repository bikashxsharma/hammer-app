import React from 'react';

import { Link } from "react-router-dom";


import logo from "../assets/logo_blue.png"
import fblogo from "../assets/fb-logo.png"

const signup = () => {

    return (<div>
        <div className="login-container">
            <div className="login-main">
                <div className="login-logo">
                    <p>Sign up</p> <span></span>
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
                                
                            </label>

                            <input type="password" name="password" placeholder="At least 7 characters" />
                        </div>
                        <div className="sign-up-terms">
                        <input type="checkbox" />
                        <p>By creating an account you agree our <a href="">Terms</a> and  <a href="">Privacy Policy</a></p>
                        </div>

                        <button className="mainCTA">Sign up</button>

                    </form>
                    <p>Already a member? <a href=""><Link to="/login">Sign in</Link></a></p>
                </div>
            </div>
        </div>
    </div>
    )


}

export default signup;