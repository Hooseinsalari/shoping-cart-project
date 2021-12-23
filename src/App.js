import './App.css';

import { Route, Switch } from 'react-router-dom';

// components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

// context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Switch>
          <Route path="/details/:id" component={ProductDetails} />
          <Route path="/" component={Store} />
        </Switch>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
