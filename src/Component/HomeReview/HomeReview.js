import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Rating from 'react-rating';
import "./HomeReview.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const HomeReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://afternoon-harbor-35453.herokuapp.com/homeReview`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);



    return (
        <div data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div>
                <div>  <div>
                    <h1 className="p-2"> Client Review  </h1>
                </div></div>


                <Row xs={1} md={3} className="g-4">
                    {
                        reviews.map(review =>
                            <div key={review._id}>
                                <div className="">
                                    <div className="col pb-5">
                                        <div className="shadow-lg border-0 rounded h-100">

                                            <div className="">


                                                <p className="card-text p-2">{review.comments}</p>

                                                <h3 className="card-title pb-2">{review.name}</h3>

                                            </div>
                                            <div className="pb-2">
                                                <Rating
                                                    initialRating={review.Rating}
                                                    emptySymbol="far fa-star icon-color "
                                                    fullSymbol="fas fa-star icon-color"
                                                    readonly    >
                                                </Rating>





                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>)
                    }



                </Row >
            </div >
        </div>
    );
};

export default HomeReview;