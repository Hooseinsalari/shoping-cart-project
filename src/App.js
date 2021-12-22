import './App.css';

import { Route, Switch } from 'react-router-dom';

// components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

// context
import ProductsContextProvider from './context/ProductsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <Switch>
        <Route path="/details/:id" component={ProductDetails} />
        <Route path="/" component={Store} />
      </Switch>
    </ProductsContextProvider>
  );
}

export default App;
