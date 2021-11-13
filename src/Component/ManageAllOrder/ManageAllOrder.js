import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";


const ManageAllOrder = () => {
    const { register, handleSubmit } = useForm();
    const [status, setStatus] = useState(false);
    const [orderId, setOrderId] = useState("");
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    const userName = user.displayName;
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
        console.log(data)
        fetch(`https://afternoon-harbor-35453.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

    const handleDelete = (orderId) => {
        console.log(orderId)
        fetch(`https://afternoon-harbor-35453.herokuapp.com/allOrders/${orderId}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert('Do You Want to Delete?');
                    setStatus(!status)
                } else {
                    setStatus(false)
                }
            });
    }



    return (
        <div className="container">
            <h1>Total Orders {orders.length}</h1>

            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Client Name</th>
                        <th>Product Name</th>
                        <th>Price</th>


                        <th>Update Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.userName}</td>
                            <td>{pd.name}</td>
                            <td>{pd.Price} RS </td>
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

                            <td> <Button onClick={() => handleDelete(pd._id)} variant="danger" >Cancel</Button></td>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrder;