import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";


const ManageAllOrder = () => {
    const { register, handleSubmit } = useForm();
    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://afternoon-harbor-35453.herokuapp.com/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);



    const handleOrderId = (id) => {
        setOrderId(id);
        // console.log(id);
    };

    const onSubmit = (data) => {

        fetch(`https://afternoon-harbor-35453.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };


    return (
        <div className="container">
            <h1>All orders {orders.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>

                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.price}</td>

                            <td>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        onClick={() => handleOrderId(pd?._id)}
                                        {...register("status")}
                                    >
                                        <option value={pd?.status}>

                                            {pd?.status}</option>
                                        <option value="shipped">shipped</option>
                                        <option value="done">Done</option>
                                    </select>
                                    <input type="submit" />
                                </form>
                            </td>

                            <button className="btn bg-danger p-2">Delete</button>
                            <button className="btn bg-success p-2">Update</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrder;