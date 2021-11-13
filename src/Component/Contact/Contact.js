import React from 'react';
import "animate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Shared/Navigarion/Navigation';
import Footer from '../Footer/Footer';
import { Button } from 'react-bootstrap';



const Contact = () => {
    return (
        <div>
            <div><Navigation></Navigation></div>


            <div><div className="row  d-flex align-items-center rounded-3 bg-secondary   " id="subscribe">
                <div className="col-md-6 col-sm-6 " >
                    <h1>LET'S STAY IN TOUCH</h1>
                    <p>Get update on sales, specials and more</p>
                    <input className="form-control mx-5  " type="text" placeholder="Your Email" />
                    <br />
                    <Button variant="light">Submit</Button>
                </div>

                <div className="p-5 h-100 animate__animated animate__bounceanimate__animated animate__fadeInTopRight   col-md-6  col-sm-6 ">
                    <div className=" p-5   ">

                        <h1>
                            We love to hear from you
                        </h1>
                        <h4> Contact  with our team</h4>
                        <li> <FontAwesomeIcon className=" rounded-circle " icon={faPhone} /> contact number-0733***** </li>
                        <li> <FontAwesomeIcon className=" rounded-circle " icon={faEnvelope} /> Email- dfdf @gmail.com </li>
                        <li><FontAwesomeIcon className=" rounded-circle " icon={faPhone} /> Facebook pages-"www.ghg***.com"</li>
                    </div>   </div></div>
            </div>

            <div><Footer></Footer></div></div>
    );
};

export default Contact;