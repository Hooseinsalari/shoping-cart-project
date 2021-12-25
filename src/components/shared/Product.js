import React, { useContext } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./Product.module.css";

// Functions
import { shorten, isInCart, quantityCount } from "../../helpers/functions";

// context
import { cartContext } from "../../context/CartContextProvider";

// svg
import trash from "../../svg/trash.svg"

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className={styles.cartContainer}>
      <img src={productData.image} className={styles.img} alt="product" />
      <div className={styles.information}>
        <p>{shorten(productData.title)}</p>
        <p>{productData.price}$</p>
      </div>
      <div className={styles.cartFooter}>
        <Link className={styles.detailsLink} to={`/details/${productData.id}`}>Details</Link>
        <div>
          
          {quantityCount(state, productData.id) === 1 && (
            <button
            className={styles.deleteButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trash} style={{width:"14px", fontWeight:"bold"}} />
            </button>
          )}
           
          {quantityCount(state, productData.id) > 1 && (
            <button
            className={styles.button}
              onClick={() => dispatch({ type: "DECREASE", payload: productData })}
            >
              <span>-</span>
            </button>
          )}
          {
            quantityCount(state, productData.id) > 0 && <span>{quantityCount(state, productData.id)}</span>
          }
         {isInCart(state, productData.id) ? (
            <button className={styles.button} onClick={() => dispatch({ type: "INCREASE", payload: productData })}>
              <span>+</span>
            </button>
          ) : (
            <button
            className={styles.addBtn} onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
