// Server file

const fs = require("fs");
const path = require("path");
const express = require("express"); 
const bodyParser = require("body-parser");
const app = express();
const portNumber = process.argv[2];
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config({ path: path.resolve(__dirname, '.env') });

const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;
const database = process.env.MONGO_DB_NAME;
const boardCollection = process.env.MONGO_BOARD_COLLECTION;
const appCollection = process.env.MONGO_APP_COLLECTION;

app.set('views', path.resolve(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.listen(portNumber);
app.get('/', (request, response) => {
  response.render('index');
});