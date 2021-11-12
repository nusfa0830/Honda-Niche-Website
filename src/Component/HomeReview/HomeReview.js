import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const HomeReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://afternoon-harbor-35453.herokuapp.com/homeReview`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);



    return (
        <div>
            <div>
                <div>  <div>
                    <h1 className="p-2"> Client Review</h1>
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

                                                <h3 className="card-title pb-3">{review.name}</h3>

                                            </div>
                                            <div>
                                                <div className=" d-flex justify-content-center " >
                                                    <div className="star-icon pb-2">
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </div>
                                                </div>



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