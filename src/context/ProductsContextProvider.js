import React, { createContext, useEffect, useState } from 'react';

// API
import { getAllProducts } from '../services/GetAllProducts';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
    
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
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;