import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        fetch(`https://afternoon-harbor-35453.herokuapp.com/addProduct`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };


    return (
        <div>
            <div>
                <div>
                    <h1 className="mt-2 text-center ">Please Add Product</h1>
                    <div className=" w-25 m-auto mt-3">
                        <div className=" ">
                            <div className="">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        {...register("name")}
                                        placeholder="Name"
                                        className="p-2 m-2 w-100 input-field"
                                    />

                                    <input
                                        {...register("description")}
                                        placeholder="Description"
                                        className="p-2 m-2 w-100 input-field"
                                    />

                                    <input
                                        {...register("image", { required: true })}
                                        placeholder="Image Link"
                                        className="p-2 m-2 w-100 input-field"
                                    />

                                    <input
                                        {...register("price", { required: true })}
                                        placeholder="Price"
                                        type="number"
                                        className="p-2 m-2 w-100 input-field"
                                    />

                                    <select {...register("model")} className="p-2 m-2 w-100">
                                        <option value="premium">premium</option>
                                        <option value="business">business</option>
                                    </select>
                                    <br />

                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <input
                                        type="submit"
                                        value="Add"
                                        className="btn btn-info w-50"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AddProduct;