import React, { useEffect, useState } from 'react';

import 'animate.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Spinner } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const HomeProducts = () => {
    const [services, setServices] = useState([]);
    const { user, isLoading } = useFirebase();
    useEffect(() => {
        fetch(`https://afternoon-harbor-35453.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);


    if (isLoading === true) {
        return (
            <div className="text-center">
                <Spinner animation="border" variant="danger" />
            </div>
        );
    }
    return (
        <div>
            <div> <div>
            </div>
                <div>
                    <h1 className=" pt-5">Ours  Bike Collection</h1>
                    <div className="container w-50" ><hr></hr></div>
                </div></div>
            <Row xs={1} md={3} className="g-4">
                {
                    services.slice(0, 6).map(service =>
                        <div key={service.key}>
                            <div className="">
                                <div className="col pb-5">
                                    <div className="shadow-lg border-0 rounded h-100  ">
                                        <img className="card-img-top image img-fluid p-2 " src={service.image} alt="..." />
                                        <div className="">
                                            <h3 className="card-title">{service.name}</h3>


                                            <p className="card-text p-2">{service.description}</p>
                                        </div>
                                        <div>


                                            <h6 className="text-primary" > {service.price}</h6>
                                            <h6 className="text-secondary" >  {service.miles}</h6>
                                            <h6 className="text-secondary" ><FontAwesomeIcon icon={faUser} /> {service.reviews} preson  </h6>
                                        </div>

                                        <div className="pb-2">
                                            <Link to={`/allproducts/${service._id}`}>    <Button className="btn-success  ">Buy NOW</Button>
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