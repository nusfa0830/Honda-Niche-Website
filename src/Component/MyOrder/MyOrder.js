
import React, { useEffect, useState } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';


const MyOrder = () => {
    const [control, setConrol] = useState(false);
    const { user } = useFirebase();

    const [myOrders, setMyorders] = useState();
    const email = user.email;


    useEffect(() => {

        fetch(`https://afternoon-harbor-35453.herokuapp.com/myOrder/${email}`)
            .then((res) => res.json())
            .then(data => setMyorders(data))
    }, [email, myOrders])




    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://afternoon-harbor-35453.herokuapp.com/myOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert('Do You Want to Delete?');
                    setConrol(!control)
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
                        <Table striped bordered hover className=" table-responsive-sm"  >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>User</th>
                                    <th>Product Name</th>
                                    <th>Status</th>
                                    <th>Model</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            {myOrders?.map((pd, index) => (

                                <tbody className="" >
                                    <tr>
                                        <td>{index}</td>
                                        <td>{pd?.email}</td>
                                        <td>{pd?.name}</td>
                                        <td>{pd?.model}</td>
                                        <td>{pd?.status}</td>

                                        <td><Button onClick={() => handleDelete(pd._id)} variant="danger" >Cancel</Button>
                                        </td>

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