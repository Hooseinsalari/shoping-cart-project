import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import { cartContext } from '../../context/CartContextProvider';

// icons
import cart from "../../svg/cart.svg"

const Navbar = () => {

    const {state} = useContext(cartContext)

    return (
        <div>
            <div>
                <Link to="/store">Product</Link>
                <div>
                    <Link to="/shoppingCart"><img src={cart} alt='icon' style={{width:"30px"}} /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;