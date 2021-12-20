import React from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from "./Product.module.css"

// Functions
import { shorten } from '../helpers/functions';

const Product = ({image, title, price, description }) => {
    return (
        <div className={styles.cartContainer}>
            <img src={image} className={styles.img} alt='product' />
            <div className={styles.information}>
                <p>{shorten(title)}</p>
                <p>{price}</p>
            </div>
            <div className={styles.cartFooter}>
                {/* <Link>Details</Link> */}
                <button>add</button>
            </div>
        </div>
    );
};

export default Product;