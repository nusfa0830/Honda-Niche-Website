import React, { useEffect, useState } from 'react';

import { Row } from 'react-bootstrap';
import AllProducts from '../AllProducts/AllProducts';
import Footer from '../Footer/Footer';
import Navigation from '../Shared/Navigarion/Navigation';


const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`https://afternoon-harbor-35453.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products]);


    return (
        <div>
            <div className="product-header" >
                <Navigation></Navigation>
            </div>
            <div className="py-5">
                <h1 className="p-3 text-secondary">Bikes Collection</h1>


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

            </div >  </div>
    );
};

export default Products;