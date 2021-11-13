import React from 'react';
import "./Navigation.css"
import { NavLink, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useFirebase from '../../../hooks/useFirebase';
import logo from "../../../Images/header-bike-removebg-preview.png"
const Navigation = () => {
    const { user, logout } = useFirebase();

    return (
        <div className="pb-5 row container">

            <Navbar bg="light" expand="lg" variant="light" fixed="top"  >
                <Container fluid>
                    <Navbar.Brand className="" href="#home">

                        <img
                            alt=""
                            src={logo}
                            width="90"
                            height="70"
                            className="d-inline-block align-top 
                        "
                        />
                        EXPORSO
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav link" >
                        <Nav className=" justify-content-end    nav-item dropdown fw-bold  col-10">

                            <Nav.Link as={NavLink} to="/home" className="items ">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="items ">
                                Contact
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/allproducts" className="items">

                                Products
                                <FontAwesomeIcon icon={faSearch} />

                            </Nav.Link>





                            {user.email && (<>


                                <Nav.Link as={NavLink} to="/dashboard" className="items">
                                    <li>Dashboard</li>
                                </Nav.Link>
                                < Link to="/">
                                    {user.displayName}
                                    <Button onClick={logout} variant="danger">

                                        LogOut
                                    </Button>
                                </Link></>
                            )}
                        </Nav>



                        <Nav.Link as={NavLink} to="/login">
                            <Button variant="danger">

                                Login
                            </Button>

                        </Nav.Link>



                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div >
    );
};

export default Navigation;