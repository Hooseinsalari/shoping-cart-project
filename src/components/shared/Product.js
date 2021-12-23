import React, { useContext } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./Product.module.css";

// Functions
import { shorten, isInCart, quantityCount } from "../../helpers/functions";

// context
import { cartContext } from "../../context/CartContextProvider";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className={styles.cartContainer}>
      <img src={productData.image} className={styles.img} alt="product" />
      <div className={styles.information}>
        <p>{shorten(productData.title)}</p>
        <p>{productData.price}</p>
      </div>
      <div className={styles.cartFooter}>
        <Link to={`/details/${productData.id}`}>Details</Link>
        {isInCart(state, productData.id) ? (
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: productData })}
          >
            +
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          >
            Add to cart
          </button>
        )}
        {quantityCount(state, productData.id) === 1 && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
          >
            remove
          </button>
        )}
        {quantityCount(state, productData.id) > 1 && (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}
          >
            -
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
