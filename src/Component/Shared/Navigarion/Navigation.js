import React from 'react';
import "./Navigation.css"

import { NavLink, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';

const Navigation = () => {
    const { user, signInWithGoogle, logout } = useFirebase();

    return (
        <div className="pb-5">

            <Navbar bg="light" expand="lg" variant="light" fixed="top"  >
                <Container fluid>
                    <Navbar.Brand className="px-5 col-2" href="#home">

                        <img
                            alt=""
                            src={""}
                            width="50"
                            height="50"
                            className="d-inline-block align-top
                        "
                        />
                        EXPORSO
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav link" >
                        <Nav className="d-flex justify-content-end nav-item dropdown fw-bold  col-10">
                            <Nav.Link as={NavLink} to="/home" className="items ">
                                <li>Home</li>
                            </Nav.Link>


                            <Nav.Link as={NavLink} to="/dashboard" className="items">
                                <li>Dashboard</li>
                            </Nav.Link>


                            <Nav.Link as={NavLink} to="/review" className="items">
                                <li>review</li>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/allproducts" className="items">

                                <Button className="success text-center px-2 explore  "> Explore
                                </Button>
                            </Nav.Link>


                            <Nav.Link as={NavLink} to="/login">
                                <Button variant="danger">

                                    Login
                                </Button>

                            </Nav.Link>

                            {user.email && (
                                <Link to="/">
                                    {user.displayName}
                                    <Button onClick={logout} variant="danger">

                                        LogOut
                                    </Button>
                                </Link>
                            )}

                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <div className="container ">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img">
                          
                            <h1 className="text-white " >Exporso</h1>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>



                                <Link to="/dashboard" className="items">
                                    <li>Dashboard </li>
                                </Link>


                                <Link to="/login" className="items">
                                    <li>Login</li>
                                </Link>



                                <Link to="/allproducts" className="items">

                                    <Button className="success text-center px-2 explore  "> Explore
                                    </Button>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Navigation;