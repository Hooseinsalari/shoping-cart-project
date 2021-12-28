import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { cartContext } from "../../context/CartContextProvider";

// icons
import cart from "../../svg/cart.svg";

// styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { state } = useContext(cartContext);

  return (
    <div className={styles.navContainer}>
      <div className={styles.container}>
        <div className={styles.linkContainer}>
          <Link to="/store" className={styles.link}>
            Product
          </Link>
        </div>
        <div className={styles.cart}>
          <Link to="/shoppingCart" className={styles.cartLink}>
            <img src={cart} alt="icon" style={{ width: "30px" }} />
          </Link>
          <span className={styles.cartNum}>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
