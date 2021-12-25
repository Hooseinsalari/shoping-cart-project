import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import Product from './shared/Product';
import { Carousel } from '@trendyol-js/react-carousel';


// style
import styles from "./Store.module.css";

const Store = () => {

    const products = useContext(ProductsContext)
 
    return (
        <div className={styles.container}>
            {
                products.map((product) => <Product
                    key={product.id}
                    productData={product}
                />)
            }           
        </div>
    );
};

export default Store;