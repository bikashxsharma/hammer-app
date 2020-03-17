import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";


import logo from "../assets/logo_blue.png"

const Signup = () => {

    const[fullname, setFullname]=useState(null);
    const[email, setEmail]=useState(null);
    const[password, setPassword]=useState(null);

    useEffect(()=>{
       
        console.log(fullname);
    })
        
    
  

    const handleChange =(e)=>{
       
    }
       
    

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
                            <label className="email-label">Full Name</label>
                            <input type="text" name="Fullname" placeholder="e.g John Doe" onChange={handleChange} />
                        </div>
                   
                        <div className="form-group">
                            <label className="email-label">Email Address</label>
                            <input type="email" name="Email" onChange={handleChange}/>
                        </div>

                        <div className="form-group">
                            <label className="password-label">Password
                                
                            </label>

                            <input type="password" name="Password" placeholder="At least 7 characters" onChange={handleChange} />
                        </div>
                        <div className="sign-up-terms">
                        <input type="checkbox" />
                        <p>By creating an account you agree our <a href="">Terms</a> and  <a href="">Privacy Policy</a></p>
                        </div>

                        <button className="mainCTA">Sign up</button>

                    </form>
                    <p>Already a member? <Link to="/login">Sign in</Link></p>
                </div>
            </div>
        </div>
    </div>
    )


}

export default Signup;