
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';


const MyOrder = () => {
    const [control, setConrol] = useState(false);
    const { user } = useFirebase();
    const email = user.email;
    const [myOrders, setMyorders] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${email}`)
            .then((res) => res.json())
            .then(data => setMyorders(data))
    }, [email])


    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/myOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setConrol(!control);
                    alert('Do You Want to Delete?');
                } else {
                    setConrol(false);
                }
            });
    }




    return (
        <div>
            <div className="pt-5 px-5" >
                <h1> </h1>
                <div className="all-products">
                    <div className="row container text-center">
                        <Table striped bordered hover className="table-responsive table-responsive-sm"  >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>User</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            {myOrders?.map((pd, index) => (

                                <tbody className="" >
                                    <tr>
                                        <td>{index}</td>
                                        <td>{pd?.email}</td>
                                        <td>{pd?.name}</td>
                                        <td>${pd?.price}</td>
                                        <td><Button onClick={() => handleDelete(pd._id)} variant="danger" >Cancel</Button></td>

                                    </tr>
                                </tbody>

                            ))}
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;