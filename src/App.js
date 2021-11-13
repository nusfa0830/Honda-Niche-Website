import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Products from './Component/Products/Products';
import LogIn from './Component/LogIn/LogIn';
import Register from './Component/Register/Register'
import Review from './Component/Review/Review';
import PrivateRoute from './Private/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import ProductDetails from './Component/ProductDetails/ProductDetails';

import Dashboard from './Component/Dashboard/Dashboard';
import Contact from './Component/Contact/Contact';



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/allproducts/:_id" >
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/allproducts">
              <Products></Products>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
