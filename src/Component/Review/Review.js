import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    // const { user } = useFirebase();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addReview", {
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
            <h1>Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field my-2"
                    name="email"
                    // value={user?.email}
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="input-field my-2"
                    name="name"
                    // value={user?.email}
                    type="name"
                    placeholder="name"
                    {...register("name", { required: true })}
                />
                <br />
                <input
                    className="input-field my-2 "
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />
                <input
                    className="input-field my-2"
                    placeholder="Rating"
                    {...register("Rating", { min: 0, max: 5 })} />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    );
};

export default Review;