import './App.css';

import { Route, Switch } from 'react-router-dom';

// components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShoppingCart from './components/ShoppingCart';
import HomePage from './components/HomePage';

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
          <Route path="/store" component={Store} />
          <Route path="/" component={HomePage} />
        </Switch>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
