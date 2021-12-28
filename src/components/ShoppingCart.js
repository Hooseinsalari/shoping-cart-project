import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// context
import { cartContext } from "../context/CartContextProvider";

//shared
import Cart from "./shared/Cart";

// style
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total Items: </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Payments: </span>${state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHEKOUT" })}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <p>Check Out Successfully</p>
          <Link to="/store">Buy More</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <p>Do you want to buy?</p>
          <Link to="/store">Back To Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
