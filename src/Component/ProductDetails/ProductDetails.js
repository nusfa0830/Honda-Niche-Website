import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth"
import Navigation from '../Shared/Navigarion/Navigation';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';


const ProductDetails = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { _id } = useParams();
    const { user } = useFirebase();
    const [product, setProduct] = useState({});

    const onSubmit = (data) => {
        data.email = user.email;
        data.status = "pending"
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

    return (
        <div>
            <div className="pb-5"><Navigation></Navigation></div>
            <div className="details-container">
                <div className="row container">
                    <div className="col-md-6">

                        <img className="w-50" src={product.image} alt="" />
                        <p>{product?.description}</p>
                        <h1>{product?.name}</h1>
                        <h1> {product?.price}</h1>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("userName")}
                                placeholder="Client Name"
                                defaultValue={user?.displayName}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("email")}
                                placeholder="Email"
                                defaultValue={user?.email}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("name")}
                                placeholder="Name"
                                defaultValue={product?.name}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("adreess")}
                                defaultValue=""
                                placeholder="Address"
                                className="p-2 m-2 w-100 input-field"
                            />
                            <input
                                {...register("Phone Number", { required: true })}
                                placeholder="Phone Number"
                                defaultValue=""
                                type="number"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <select {...register("model")} className="p-2 m-2 w-100">
                                <option value="premium">premium</option>
                                <option value="classic">classic</option>
                            </select>
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Order now"
                                className="btn btn-success w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductDetails;