import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import ShoppingCart from './components/ShoppingCart'; // Asegúrate de importar ShoppingCart
import NavigationBar from './components/NavigationBar';
import FormContainer from './containers/FormContainer';
import axios from "axios";

axios.defaults.baseURL='http://localhost:3001';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/product/:name" component={ProductDetailsContainer} />
          <Route path="/cart" component={ShoppingCart} /> {/* Nueva ruta para el carrito de compras */}
          <Route path="/form" component={FormContainer} />
          {/* Otras rutas */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
