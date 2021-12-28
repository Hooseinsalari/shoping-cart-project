import React, { useContext } from "react";

// context
import { ProductsContext } from "../context/ProductsContextProvider";

// style
import styles from "./ProcuctDetails.module.css";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  return (
    <div className={styles.container}>
      <img src={product.image} className={styles.proImg} alt="product" />
      <h3 className={styles.proTitle}>{product.title}</h3>
      <p className={styles.proPrice}>{product.price}</p>
      <p className={styles.proDesc}>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
