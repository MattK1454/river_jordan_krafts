import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

function HomeScreen() {
    return (
        <React.Fragment>
            <h1>Latest Products</h1>
            <Row>
                {products.map( (product) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    );
                })}
            </Row>
        </React.Fragment>
    );
}

export default HomeScreen;