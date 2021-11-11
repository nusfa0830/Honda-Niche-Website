import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';

import { Link } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
const HomeProducts = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/homeProducts`)
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);

    return (
        <div>
            <div>  <div>
                <h1 className=" p-2">Ours  Bike Collection</h1>
            </div></div>


            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service =>
                        <div key={service.key}>
                            <div className="">
                                <div className="col pb-5">
                                    <div className="shadow-lg border-0 rounded h-100">
                                        <img src={service.image} className="card-img-top img-fluid p-2" alt="..." />
                                        <div className="">
                                            <h3 className="card-title">{service.name}</h3>


                                            <p className="card-text p-2">{service.description}</p>
                                        </div>
                                        <div>


                                            <h6 className="text-primary" > Price: {service.price}</h6>
                                            <h6 className="text-secondary" >  {service.miles}</h6>
                                            <h6 className="text-secondary" > Review: {service.reviews}</h6>
                                        </div>

                                        <div className="pb-2">
                                            <Link to="/buynow">    <Button className="btn-success  ">Buy NOW</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>)
                }



            </Row >
        </div >
    );
};

export default HomeProducts;