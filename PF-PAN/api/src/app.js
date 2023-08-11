
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');


const userHandler = require('./handlers/HandlerUser.js');


const { Sequelize } = require('sequelize');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const {

  URL_CLIENT

} = process.env;
console.log("este es", URL_CLIENT)


require('./db.js');

const server = express();

server.name = 'API';

const setUpInitialData = async () => {
  try {
    await userHandler.setInitialAdmin();
  } catch (error) {
    console.error('Error setting up initial data:', error);
  }
};


setUpInitialData();


server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cors());
server.use(cookieParser());
server.use(cors());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "http://localhost:3000"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes );

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
//client: https://pan-4dg1.onrender.com   api: https://pf-pan-masa-madre.vercel.app