import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';

import ProductDetailsContainer from './containers/ProductDetailsContainer';
import NavigationBar from './components/NavigationBar';

import FormContainer from './containers/FormContainer';
import axios from "axios";
axios.defaults.baseURL='https://pan-4dg1.onrender.com/';



const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavigationBar />
        <Switch> {/* Utiliza el componente Switch */}
          <Route path="/" exact component={HomeContainer} />
          
          <Route path="/product/:productId" component={ProductDetailsContainer} />
          <Route path="/form" component={FormContainer} />


          {/* Otras rutas */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;