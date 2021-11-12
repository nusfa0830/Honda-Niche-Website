import React from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = (data) => {
        fetch(`https://afternoon-harbor-35453.herokuapp.com/madeAdmin`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };



    return (
        <div>
            <h1>Make admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="Make  Admin"
                />
            </form>
        </div>
    );
};

export default MakeAdmin;
