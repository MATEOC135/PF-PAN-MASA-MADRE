import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';

import ProductDetailsContainer from './containers/ProductDetailsContainer';
import ShoppingCart from './components/ShoppingCart'; 
import NavigationBar from './components/NavigationBar';
import FormContainer from './containers/FormContainer';
import PaymentComponent from './components/PaymentComponent';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API;

const stripeTestPromise = loadStripe("pk_test_51NbpzDAXMAaaaz8xIaW0SQu2CwPlQJESfqdqTzvCXbVjPPjlO2xiFdEJuFVRuBMlxRZy4QEtANDDELSIP6plWK36009SwnpBgo");

const App = () => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    stripeTestPromise.then(stripeInstance => {
      setStripe(stripeInstance);
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/product/:name" component={ProductDetailsContainer} />
          {stripe && (
            <Route 
              path="/payment" 
              render={(props) => (
                <Elements stripe={stripe}>
                  <PaymentComponent {...props} />
                </Elements>
              )} 
            />
          )}
              <Route path="/cart" component={ShoppingCart} />
            
          <Route path="/form" component={FormContainer} />

          {/* Otras rutas */}

        </Switch>
      </div>
    </Router>
  );
};

export default App;