import React from 'react';
import './product.css';

import { Button } from 'react-bootstrap';
 
const Product = (props) => {
    const {name, image, price, categories} = props.product;   
    return (
        <div className="container">
            <div className="product-card shadow-sm">
            <img className="product-img img-fluid" src={image} alt=""/>
            <h5 className="categories">{categories}</h5>
            <h5 className="product-title">{name}</h5>
            <h5>Price: ${price}</h5>
 
            <Button onClick={() => props.addProduct(props.product)}
                className="btn btn-success"> Add To Cart
            </Button>
            </div>
        </div>
    );
};
 
export default Product;