import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const AllProducts = (props) => {



    const { name, description, price, image, _id, miles, reviews } = props.product;

    return (
        <div>
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


                                <h6 className="text-primary" > Price:  {price}</h6>
                                <h6 className="text-secondary" >  {miles}</h6>
                                <h6 className="text-secondary" > Review : {reviews}</h6>
                            </div>

                            <div className="pb-2">
                                <Link to={`/allproducts/${_id}`}>    <Button className="btn-  ">Order NOW</Button>
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