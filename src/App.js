import './App.css';

import { Route, Switch } from 'react-router-dom';

// components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShoppingCart from './components/ShoppingCart';

// context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/details/:id" component={ProductDetails} />
          <Route path="/shoppingCart" component={ShoppingCart} />
          <Route path="/" component={Store} />
        </Switch>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
