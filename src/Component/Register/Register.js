import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';

import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigarion/Navigation';


const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();

    let history = useHistory();
    let location = useLocation();
    const [loginData, setLoginData] = useState({});



    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password didnot match');
            return
        }
        // console.log(loginData.name)
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div>
            <div className="pb-5">

                <Navigation></Navigation>

            </div>
            <div className="login-form py-5">
                <div>

                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <input
                            className="input-field my-2"
                            name="name"
                            placeholder="name"
                            type="name"
                            onBlur={handleonBlur}

                        />
                        <br />
                        <input
                            className="input-field my-2"
                            name="email"
                            placeholder="Email"
                            type="email"
                            onBlur={handleonBlur}

                        />
                        <br />
                        <input
                            className="input-field my-2"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onBlur={handleonBlur}

                        />
                        <br />
                        <input
                            className="input-field my-2"
                            name="password2"
                            type="password"
                            placeholder="Retype Password"
                            onBlur={handleonBlur}

                        />
                        <br />
                        <Button
                            variant=""
                            type="submit"
                            style={{ backgroundColor: '#4aede0' }}>Register</Button>

                    </form>}


                    <NavLink
                        to="/login"
                        style={{ textDecoration: 'none' }} >

                        <Button variant="" style={{ color: '#39dbce' }}>Already Registered? Please LogIn </Button>
                    </NavLink>

                </div>
            </div>
            <div>

                <div>
                    {isLoading && <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                </div>


                <div>
                    {user?.email && [
                        'success',
                    ].map((variant, idx) => (
                        <Alert className=" container w-50" key={idx} variant={variant}>
                            Succesfully Register
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
        </div>


    );
};

export default Register;