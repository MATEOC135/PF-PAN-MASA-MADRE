import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer';


import ProductDetailsContainer from './containers/ProductDetailsContainer';
import NavigationBar from './components/NavigationBar';

import FormContainer from './containers/FormContainer';
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API;




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


          {/* Otras ruta */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;