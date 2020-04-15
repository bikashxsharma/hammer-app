import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { Link } from "react-router-dom";
import logo from "../assets/logo_blue.png"

//firebase
import fire from '../config/Fire'

import userLogIn from '../actions/userLogIn'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // for errors
    const [errorMessage, setErrorMessage] = useState('');



    const dispatch = useDispatch();

    const handleEmail = (e) => {
        setEmail(e.target.value);

    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    const userLogin = (e) => {

        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .then(
                dispatch(userLogIn())
            )
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                setErrorMessage(errorMessage);
                console.error(errorCode);
                console.error(errorMessage);
                // ...
            });



        // dispatch(userLogIn());
        // return <Home />


    }

    return (
        <div>
            <div className="login-container">
                <div className="login-main">
                    <div className="login-logo">
                        <p>Sign in</p> <span></span>
                        <img src={logo} alt="Hammer logo" />
                    </div>
                    <div className="login-content">
                        <form className="login-form" onSubmit={userLogin}>
                            <div className="form-group">
                                <label className="email-label">Email Address</label>
                                <input type="email" name="email" required onChange={handleEmail} />
                            </div>

                            <div className="form-group">
                                <label className="password-label">Password
                                <p><a href="/">Forget Password?</a></p>
                                </label>

                                <input type="password" name="password" required onChange={handlePassword} />
                            </div>
                            <label style={{ color: '#5a5555', lineHeight: 1.5, fontWeight: 400, backgroundColor: '#ffe3e3' }}>{errorMessage}</label>

                            <button className="mainCTA" type="submit" >Sign in</button>

                        </form>
                        <p>Not a member? <Link to="/signup">Sign up now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Login;