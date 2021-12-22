import React, { useContext } from 'react';

// context
import { ProductsContext } from '../context/ProductsContextProvider';

const ProductDetails = (props) => {
    const id = props.match.params.id
    const data = useContext(ProductsContext)
    const product = data[id - 1]
    return (
        <div>
            <h1>Detailes</h1>
            <img src={product.image}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;