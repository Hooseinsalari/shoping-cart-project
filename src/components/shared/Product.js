import React from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from "./Product.module.css"

// Functions
import { shorten } from '../../helpers/functions';

const Product = ({ productData }) => {
    return (
        <div className={styles.cartContainer}>
            <img src={productData.image} className={styles.img} alt='product' />
            <div className={styles.information}>
                <p>{shorten(productData.title)}</p>
                <p>{productData.price}</p>
            </div>
            <div className={styles.cartFooter}>
                <Link to={`/details/${productData.id}`}>Details</Link>
                <button>add</button>
            </div>
        </div>
    );
};

export default Product;