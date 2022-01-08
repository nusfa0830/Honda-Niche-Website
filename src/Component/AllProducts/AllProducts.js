import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AllProducts = (props) => {



    const { name, description, price, image, _id, miles, reviews } = props.product;

    return (
        <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div>
                <div className="">
                    <div className="col pb-5">
                        <div class="shadow-lg border-0 rounded h-100">
                            <img src={image} className="card-img-top img-fluid p-2" alt="..." />
                            <div className="">
                                <h3 className="card-title">{name}</h3>

                                <p className="card-text p-2">{description}</p>
                            </div>
                            <div>


                                <h6 className="text-primary" >   {price}</h6>
                                <h6 className="text-secondary" >  {miles}</h6>
                                <h6 className="text-secondary" > <FontAwesomeIcon icon={faUser} /> {reviews} person </h6>
                            </div>

                            <div className="pb-2">
                                <Link to={`/allproducts/${_id}`}>    <Button variant="success" >Order Now</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllProducts;