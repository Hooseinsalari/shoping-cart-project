import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import Product from './shared/Product';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div>
            {
                products.map((product) => <Product
                    image= {product.image}
                    title= {product.title}
                    price= {product.price}
                    description = {product.description}
                    
                />)
            }        
        </div>
    );
};

export default Store;