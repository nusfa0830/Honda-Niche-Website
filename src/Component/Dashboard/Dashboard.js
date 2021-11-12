import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import Navigation from '../Shared/Navigarion/Navigation';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Review from '../Review/Review';
import MyOrder from '../MyOrder/MyOrder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import "./Dashboard.css"
import Payment from '../Payment/Payment';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
const Dashboard = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const { user, logout } = useFirebase()
    let { path, url } = useRouteMatch();



    useEffect(() => {
        fetch(`https://afternoon-harbor-35453.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email, isAdmin]);


    return (

        <>
            <div className="pb-5"><Navigation></Navigation></div>
            <div>


                <div className="dashboard-container  ">
                    <div className="row">
                        <div className="col-md-3 col-sm-2 ">
                            <div className="dashboard">
                                {!isAdmin && (<div className="d-flex flex-column " >

                                    <Link to={`${url}`}>
                                        <button type="button" className="mb-3 btn w-75 btn-light dashboard-menu " disabled>Dashboard</button>
                                    </Link>

                                    <Link to={`${url}/pay`}>
                                        <button type="button" className="btn w-75 btn-light dashboard-menu ">Payment</button>
                                    </Link>

                                    <Link to={`${url}/myorders`}>
                                        <button type="button" className="btn w-75 btn-light dashboard-menu ">My order</button>
                                    </Link>

                                    <Link to={`${url}/review`}>
                                        <button type="button" className="btn w-75 btn-light dashboard-menu ">Review</button>
                                    </Link>
                                </div>)}

                                {isAdmin && (<div className="d-flex flex-column">
                                    <Link to={`${url}`}>
                                        <button type="button" className="mb-3 btn w-75 btn-light dashboard-menu " disabled>Admin Dashboard</button>
                                    </Link>

                                    <Link to={`${url}/addProduct`}>
                                        <button type="button" className="btn w-75 btn-light dashboard-menu ">Add Product</button>
                                    </Link>

                                    <Link to={`${url}/makeAdmin`}>
                                        <button type="button" className="btn w-75 btn-light dashboard-menu ">Make Admin</button>
                                    </Link>
                                    <Link to={`${url}/manageProduct`}>
                                        <button type="button" className="btn w-75 btn-light dashboard-menu ">Manage Products</button>
                                    </Link>
                                    <Link to={`${url}/manageOrder`}>
                                        <button type="button" className="btn w-75 btn-light dashboard-menu ">Manage ALL Orders</button>
                                    </Link>
                                </div>)}


                                <div className="my-3" ><Button className="w-75"
                                    onClick={logout} variant="danger">

                                    LogOut
                                </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-2 switch">
                            <Switch>
                                <Route exact path={path}>

                                </Route>

                                <Route exact path={`${path}/pay`}>
                                    <Payment></Payment>
                                </Route>

                                <Route exact path={`${path}/myorders`}>
                                    <MyOrder></MyOrder>
                                </Route>
                                <Route exact path={`${path}/review`}>
                                    <Review></Review>
                                </Route>
                                <Route exact path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </Route>
                                <Route exact path={`${path}/addproduct`}>
                                    <AddProduct></AddProduct>
                                </Route>
                                <Route exact path={`${path}/manageProduct`}>
                                    <ManageProduct></ManageProduct>
                                </Route>
                                <Route exact path={`${path}/manageOrder`}>
                                    <ManageAllOrder></ManageAllOrder>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
};

export default Dashboard;