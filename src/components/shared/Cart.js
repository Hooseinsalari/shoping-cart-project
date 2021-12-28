import React, { useContext } from 'react';

// function
import { shorten } from '../../helpers/functions';

// context
import { cartContext } from '../../context/CartContextProvider';

// style 
import styles from "./Cart.module.css";

// svg
import trash from "../../svg/trash.svg"

const Cart = (props) => {

    const { dispatch } = useContext(cartContext);

    const {title, image, price, quantity} = props.data

    return (
        <div className={styles.container}>
            <img src={image} className={styles.image} alt='product' />
            <div className={styles.information}>
                <p>{shorten(title)}</p>
                <p>${price}</p>
            </div>
            <div>
                <p className={styles.quantity}>{quantity}</p>    
            </div>            
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
                {
                    quantity > 1 ?
                    <button className={styles.button} onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button>:
                    <button className={styles.removeBtn} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}><img src={trash}></img></button>
                }
            </div>
        </div>
    );
};

export default Cart;