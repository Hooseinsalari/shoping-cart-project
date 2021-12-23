import React, { useContext } from 'react';

// function
import { shorten } from '../../helpers/functions';

// context
import { cartContext } from '../../context/CartContextProvider';

const Cart = (props) => {

    const {state, dispatch} = useContext(cartContext);

    const {title, image, price, quantity} = props.data

    return (
        <div>
            <img src={image} />
            <div>
                <p>{shorten(title)}</p>
                <p>{price}</p>
            </div>
            <p>{quantity}</p>            
            <div>
                <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button>:
                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>remove</button>
                }
            </div>
        </div>
    );
};

export default Cart;