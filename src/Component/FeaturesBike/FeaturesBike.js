import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from "../../Images/bike-1.png"
import image2 from "../../Images/bike-2.png"
import image3 from "../../Images/bike-3.png"


const FeaturesBike = () => {
    return (
        <div className="py-3 container ">

            <div className="p-3">
                <h1>Our Features bike </h1>
            </div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt=""
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default FeaturesBike;