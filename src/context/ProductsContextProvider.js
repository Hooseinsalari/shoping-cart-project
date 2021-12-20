import React, { createContext, useEffect, useState } from 'react';

// API
import { getAllProducts } from '../services/GetAllProducts';

const ProductsContext = createContext();

const ProductsContextProvider = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const {data} = await getAllProducts()
            setProducts(data)
        }

        fetchApi()
    }, [])

    return (
        <ProductsContext.Provider value={products}>

        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;