import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { Link } from "react-router-dom";


import logo from "../assets/logo_blue.png"

//firebase
import fire from '../config/Fire'

import userLogIn from '../actions/userLogIn'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] =useState('');
    const [lastName, setlastName] =useState('');

    // for errors
    const [errorMessage, setErrorMessage] = useState('');



    const dispatch = useDispatch();

    const handleEmail = (e) => {
        setEmail(e.target.value);

    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handlefirstName = (e) => {
        setfirstName(e.target.value);
    }

    const handlelastName = (e) => {
        setlastName(e.target.value);
    }



    const userSignup = (e) => {

        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email, password)
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


        


    }


    return (
    <div>
        <div className="login-container">
            <div className="login-main">
                <div className="login-logo">
                    <p>Sign up</p> <span></span>
                    <img src={logo} alt="Hammer logo" />
                </div>
                <div className="login-content">
                   
                     <form className="login-form" onSubmit={userSignup}>
                        <div className="form-group">
                            <label className="email-label">First Name</label>
                            <input type="text" name="firstname" required placeholder="e.g John" required onChange={handlefirstName} />
                        </div>
                        <div className="form-group">
                            <label className="email-label">Last Name</label>
                            <input type="text" name="lastname" required placeholder="e.g Doe" required onChange={handlelastName} />
                        </div>
                   
                        <div className="form-group">
                            <label className="email-label">Email Address</label>
                            <input type="email" name="Email" required  onChange={handleEmail}/>
                        </div>

                        <div className="form-group">
                            <label className="password-label">Password
                                
                            </label>

                            <input type="password" name="Password" required placeholder="At least 7 characters" onChange={handlePassword} />
                        </div>
                        <div className="sign-up-terms">
                        <input type="checkbox" />
                        <p>By creating an account you agree our <a href="/">Terms</a> and  <a href="/">Privacy Policy</a></p>
                        </div>
                        <label style={{ color: '#5a5555',lineHeight:1.5, fontWeight:400, backgroundColor:'#ffe3e3' }}>{errorMessage}</label>
                       
                       

                        <button type="submit" className="mainCTA"  >Sign up</button>

                    </form>
                    <p>Already a member? <Link to="/login">Sign in</Link></p>
                </div>
            </div>
        </div>
    </div>
    )


}

export default Signup;