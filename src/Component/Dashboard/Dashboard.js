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
import ManageOrder from '../ManageOrder/ManageOrder';
import "./Dashboard.css"
import Payment from '../Payment/Payment';
const Dashboard = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const { user, logout } = useFirebase()
    let { path, url } = useRouteMatch();



    useEffect(() => {
        fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);


    return (

        <>
            <div className="pb-5"><Navigation></Navigation></div>
            <div>


                <div className="dashboard-container  ">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="dashboard">
                                {!isAdmin && (<div>  <h5>Dashboard</h5>
                                    <Link to={`${url}`}>
                                        <li className="dashboard-menu "></li>
                                    </Link>

                                    <Link to={`${url}/pay`}>
                                        <li className="dashboard-menu ">Payment</li>
                                    </Link>

                                    <Link to={`${url}/myorders`}>
                                        <li className="dashboard-menu ">My order</li>
                                    </Link>

                                    <Link to={`${url}/review`}>
                                        <li className="dashboard-menu ">Review</li>
                                    </Link>
                                </div>)}

                                {isAdmin && (<div className="admin-dashboard">
                                    <h5 className="pt-2">Admin Dashboard</h5>

                                    <Link to={`${url}/addProduct`}>
                                        <li className="dashboard-menu">Add Service</li>
                                    </Link>

                                    <Link to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu">Make Admin</li>
                                    </Link>
                                    <Link to={`${url}/manageProduct`}>
                                        <li className="dashboard-menu">Manage Service</li>
                                    </Link>
                                    <Link to={`${url}/manageOrder`}>
                                        <li className="dashboard-menu">Manage Service</li>
                                    </Link>
                                </div>)}


                                <div className="pt-3" ><Button onClick={logout} variant="danger">

                                    LogOut
                                </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
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
                                    <ManageOrder></ManageOrder>
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