import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth"
import Navigation from '../Shared/Navigarion/Navigation';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
import { Alert } from 'react-bootstrap';



const ProductDetails = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { _id } = useParams();
    const { user, isLoading } = useFirebase();
    const [product, setProduct] = useState({});

    const onBlur = (data) => {

        data.email = user.email;
        data.status = "pending"
        fetch(`https://afternoon-harbor-35453.herokuapp.com/addOrders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));


    };

    useEffect(() => {
        fetch(`https://afternoon-harbor-35453.herokuapp.com/singleProduct/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    return (
        <div>
            <div className="pb-5"><Navigation></Navigation></div>
            <div className="details-container pt-3">
                <div className="row container">
                    <div className="col-md-6 col-sm-2">
                        <img className="w-50" src={product.image} alt="" />
                        <h1 className="p-3"  >{product?.name}</h1>
                        <h4> {product?.price}</h4>
                        <p>{product?.description}</p>
                    </div>

                    <div className="col-md-6 col-sm-2">
                        <form onSubmit={handleSubmit(onBlur)}>
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
                                {...register("Price", { required: true })}
                                placeholder="Price"
                                defaultValue=""
                                type="number"
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

                            <div class="col-auto">
                                <span id="passwordHelpInline" class="form-text">
                                    You can see your orders in dashboard. Please visit Dashboard
                                </span>
                            </div>

                        </form>

                        <div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductDetails;