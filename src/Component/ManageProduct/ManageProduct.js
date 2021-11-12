import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';




const ManageProduct = () => {
    const [allOrders, setAllorders] = useState([]);
    const [control, setConrol] = useState(false);


    useEffect(() => {
        fetch(`https://afternoon-harbor-35453.herokuapp.com/allOrders`)
            .then((res) => res.json())
            .then((data) => setAllorders(data));
    }, []);
    console.log(allOrders);



    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://afternoon-harbor-35453.herokuapp.com/allOrders/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then((data) => {
                if (data.deletedCount) {

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
                            {allOrders?.map((pd, index) => (

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

export default ManageProduct;