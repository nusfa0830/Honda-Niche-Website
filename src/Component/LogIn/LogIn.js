import React, { useState } from 'react';
import './LogIn.css'
import { NavLink, useLocation, useHistory } from 'react-router-dom';

import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigarion/Navigation';
import useFirebase from '../../hooks/useFirebase';



const LogIn = () => {

    const { user, registerUser, signInWithGoogle, logInUser, isLoading, authError } = useFirebase();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);

    }

    const handleLoginSubmit = e => {
        logInUser(loginData.email, loginData.password, loginData.name, location, history);
        alert("logged in");
        e.preventDefault();
    }

    const handleGoogleSignin = () => {
        signInWithGoogle(location, history);

    }

    return (
        <div>
            <div className="pb-5">
                <Navigation></Navigation>
            </div>
            <div className="login-form py-5">
                <div>
                    <h2>Login</h2>
                    <div className="pb-2">   <form onSubmit={handleLoginSubmit} >

                        <input
                            className="input-field my-2"
                            onChange={handleOnChange} name="email"
                            placeholder="Email"
                            type="email"

                        />
                        <br />
                        <input
                            className="input-field my-2"
                            onChange={handleOnChange}
                            name="password"
                            type="password"
                            placeholder="Password"

                        />
                        <br />

                    </form>
                    </div>

                    <Button onClick={handleLoginSubmit} className="w-30" > LogIn </Button>
                    <p>New to website? <Link to="/register">Create Account</Link></p>
                    <div>-------or----------</div>
                    <div className=" " >
                        <Button onClick={handleGoogleSignin}
                            className="btn-danger "
                        >Google Sign In</Button>

                    </div>

                </div>
            </div>
            <div>    {isLoading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}

            </div>
            {/* alert successfully */}
            <div>
                {user?.email && [
                    'success',
                ].map((variant, idx) => (
                    <Alert className=" container w-50" key={idx} variant={variant}>
                        Succesfully login
                    </Alert>
                ))}</div>


            <div> {authError &&
                [
                    'danger',
                ].map((variant, idx) => (
                    <Alert className=" container w-50" key={idx} variant={variant}>
                        {authError}
                    </Alert>
                ))}</div>
        </div>
    );
};

export default LogIn;