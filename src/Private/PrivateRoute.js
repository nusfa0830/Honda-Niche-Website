import React, { useContext, createContext, useState } from "react";
import { Spinner } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
    let history = useHistory();
    let location = useLocation();
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};


export default PrivateRoute;