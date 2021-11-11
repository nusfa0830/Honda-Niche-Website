import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth"
import Navigation from '../Shared/Navigarion/Navigation';

const ProductDetails = () => {
    const { _id } = useParams();



    const { user } = useAuth();

    const initialinfo = { email: user.email, Address: '', phone: '' }
    const [product, setProduct] = useState(initialinfo);

    const onSubmit = (data) => {
        data.email = user?.email;
        data.status = "pending";
        fetch("http://localhost:5000/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };



    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...product };
        newInfo[field] = value;
        setProduct(newInfo);
        console.log(newInfo);
    }

    const handleBookingSubmit = e => {

        e.preventDefault();
    }

    return (
        <div className="details-container">

            <div className="pb-5" ><Navigation></Navigation></div>
            <div className="row container">
                <div className="col-md-6 col-sm-6">
                    <img className="w-50" src={product.image} alt="" />
                    <p>{product?.description}</p>
                    <h1>{product?.name}</h1>
                    <h1> {product?.price}</h1>
                </div>
                <div className="col-md-6 col-sm-6 ">
                    <form onSubmit={handleBookingSubmit}>
                        <input

                            placeholder="Client Name"
                            defaultValue={user.name} onBlur={handleonBlur}
                            className="p-2 m-2 w-100 input-field"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            defaultValue={user.email}
                            onBlur={handleonBlur}
                            className="p-2 m-2 w-100 input-field"
                        />
                        <input

                            placeholder="Bike Name"
                            defaultValue={product?.name}
                            onBlur={handleonBlur}
                            className="p-2 m-2 w-100 input-field"
                        />
                        <input

                            placeholder="Price"
                            defaultValue={product.price}
                            onBlur={handleonBlur}
                            className="p-2 m-2 w-100 input-field"
                        />
                        <input

                            defaultValue=""
                            placeholder="Address"
                            onBlur={handleonBlur}
                            className="p-2 m-2 w-100 input-field"
                        />

                        <input

                            placeholder="Phone Number"
                            defaultValue=""
                            onBlur={handleonBlur}
                            className="p-2 m-2 w-100 input-field"
                        />



                        <select className="p-2 m-2 w-100">
                            <option value="premium">premium</option>
                            <option value="classic">classic</option>

                        </select>
                        <br />



                        <input
                            type="submit"
                            value="Order now"
                            className="btn btn-success w-50"
                        />
                    </form>
                </div>
            </div>
        </div>


    );
};

export default ProductDetails;