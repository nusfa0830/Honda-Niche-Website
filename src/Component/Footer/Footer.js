import React from 'react';
import "./Footer.css"
import image4 from "../../Images/hero.jpg"
import image5 from "../../Images/suzuki 1.png"
import image6 from "../../Images/tvs.png"
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faCoffee,
    faPhoneVolume,

    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="footer text-white" >



            {/* <div>
                <div className="container slide-background d-flex align-items-center justify-content-center rounded-3 text-white pt-5 " id="subscribe">
                    <div>
                        <h1>LET'S STAY IN TOUCH</h1>
                        <p>Get update on sales, specials and more</p>
                        <input class="form-control" type="text" placeholder="Your Email" />
                        <br />
                        <Button variant="danger">Submit</Button>
                    </div>
                </div>
            </div>
             */}

            <div className="text-center p-5 " >
                <h1 className="text-white" >Our <span className="text-danger " > Associates </span> </h1>
            </div>

            <div className="container" >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card  border-0 p-0">
                            <img src={image4} className="card-img-top" alt="..." />
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card  border-0 p-4 ps-3">
                            <img src={image5} className="card-img-top" alt="..." />
                            <div className="card-body">
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card border-0 p-4">
                            <img src={image6} className="card-img-top" alt="..." />
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>   <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="text-start">
                            <h1>EXPORSO</h1>
                            <div className="icons-container d-flex text-center ">
                                <div className="icon">

                                </div>
                                <div className="icon">

                                </div>
                                <div className="icon">

                                </div>
                                <div className="icon">

                                </div>
                            </div>
                        </div>
                        <p className="mt-4 ">
                            <small>
                                *These statements have not been evaluated by the EXPORSO Administration. These SERVICES are intended to
                                help .
                            </small>
                        </p>

                    </div>

                    <div className="col-md-2">
                        <div className="footer-menu-container">
                            <ul>
                                <li className="footer-menu">Home</li>

                                <li className="footer-menu">DETAILS</li>
                                <li className="footer-menu">Contact us</li>
                                <li className="footer-menu"> About us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="right-footer-container">


                            <div className="phone d-flex align-items-center justify-content-center mt-4">
                                <div className="foter-phone-icon">
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                </div>
                                <div>
                                    <h5>+1 5 500 555 35 35</h5>
                                </div>
                            </div>
                            <div className="map d-flex align-items-center justify-content-center">
                                <div className="foter-phone-icon">
                                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </div>
                                <div>
                                    <p>
                                        160 Broadway, New York, NY 10038,
                                        <br /> 102  Avenue, New York, NY 100
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>

            </div>
            <div className="pb-5"><p >
                <small>Exporso ||2021 © . All rights reserved.</small>
            </p></div>

        </div>
    );
};

export default Footer;