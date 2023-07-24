import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const store = createStore(rootReducer, applyMiddleware(thunk));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID=process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider domain={domain} clientId={clientID} redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
