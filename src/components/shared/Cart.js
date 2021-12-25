import React, { useContext } from 'react';

// function
import { shorten } from '../../helpers/functions';

// context
import { cartContext } from '../../context/CartContextProvider';

// style 
import styles from "./Cart.module.css";

const Cart = (props) => {

    const {state, dispatch} = useContext(cartContext);

    const {title, image, price, quantity} = props.data

    return (
        <div className={styles.container}>
            <img src={image} className={styles.image} alt='product' />
            <div className={styles.information}>
                <p>{shorten(title)}</p>
                <p>{price}</p>
            </div>
            <p className={styles.quantity}>{quantity}</p>            
            <div>
                <button className={styles.addBtn} onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
                {
                    quantity > 1 ?
                    <button className={styles.decreaseBtn} onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button>:
                    <button className={styles.removeBtn} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>remove</button>
                }
            </div>
        </div>
    );
};

export default Cart;