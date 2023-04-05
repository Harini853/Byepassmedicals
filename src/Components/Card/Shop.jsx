import React, { useEffect, useState } from 'react';
import JsonData from './data.json';
import Product2 from './Product2';
import Card from './Card';

 
const Shop = () => {
    const [product, setProduct] = useState([]);
 
    const [card, setCard] = useState([]);
 
    useEffect(() => {
        setProduct(JsonData);
    }, []);
 
    const addProduct = (product) => {
        const newCard = [...card, product]
        setCard(newCard);
    }
    return (
        <div className="container-fluid d-flex">
            <div className="col-lg-9 product-area border-right">
 
                {
                    product.map(pd => <Product2 product={pd} addProduct={addProduct}></Product2>)
                }
 
            </div>
 
            <div className="col-lg-3 card-area">
                <Card card={card}></Card>
            </div>
        </div>
    );
};
 
export default Shop;