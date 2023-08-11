import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';
import { useDispatch, useSelector } from 'react-redux';
import { allBreads, postData } from './reducers/cartReducer';
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import ShoppingCart from './components/ShoppingCart'; 
import NavigationBar from './components/NavigationBar';
import FormContainer from './containers/FormContainer';
import PaymentComponent from './components/PaymentComponent';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import AdminDashboard from './components/AdminDashboard';

axios.defaults.baseURL = process.env.REACT_APP_API;




const stripeTestPromise = loadStripe("pk_test_51NbpzDAXMAaaaz8xIaW0SQu2CwPlQJESfqdqTzvCXbVjPPjlO2xiFdEJuFVRuBMlxRZy4QEtANDDELSIP6plWK36009SwnpBgo");

const App = () => {
  const [state, setState] = useState(false)
  const valid = useSelector(state => state.cart.valid);
  const [stripe, setStripe] = useState(null);
  const dispatch =useDispatch()
    
  useEffect(() => {
    dispatch(postData([]))
  
    stripeTestPromise.then(stripeInstance => {
      setStripe(stripeInstance);
    });
    setState(true)
  }, []);

  useEffect(() => {
    if (valid) {
      const timer = setTimeout(() => {
        dispatch(allBreads(""));
      }, 3500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [ valid]);

  return (
    <Router>
      <div className="app">
        <Header />
        <NavigationBar />
        <Switch>
        <Route path="/admin" exact component={AdminDashboard} />
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