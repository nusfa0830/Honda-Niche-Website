import React, { useEffect, useState } from 'react';

import { Row } from 'react-bootstrap';
import AllProducts from '../AllProducts/AllProducts';
import Footer from '../Footer/Footer';
import Navigation from '../Shared/Navigarion/Navigation';


const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products]);


    return (
        <div>
            <div className="about-header" >
                <Navigation></Navigation>
            </div>
            <div className="py-5">
                <h1 className=" p-2 text-secondary">Ours  Bike Collection</h1>

            </div>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map((product) => <AllProducts
                            key={product.key}
                            product={product}
                            id={product._id}
                        >
                        </AllProducts>)
                    }
                </Row>

            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Products;