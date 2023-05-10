// Dependencies
const fs = require("fs");
const path = require("path");
const express = require("express"); 
const bodyParser = require("body-parser");
const app = express();
const portNumber = process.argv[2];
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config({ path: path.resolve(__dirname, '.env') });

// MongoDB credentials
const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;
const database = process.env.MONGO_DB_NAME;
const boardCollection = process.env.MONGO_BOARD_COLLECTION;
const appCollection = process.env.MONGO_APP_COLLECTION;

// Initiate the server pages
app.set('view engine', 'ejs');

// Allowing the server to view CSS and image files
const publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

// Server is now listening on given port number
app.listen(portNumber);

// Intialize body parser
app.use(bodyParser.urlencoded({extended:false}));

// Render the index page
app.get('/', (request, response) => {
  response.render('index');
});

// Render the about page
app.get('/about', (request, response) => {
    response.render('about');
  });

// Render the admin login page
app.get('/login', (request, response) => {
    const action = {port: `http://localhost:${portNumber}/admin`};
    response.render('login', action);
  });

app.post('/admin', (request, response) => {
    const adminUsername = request.body.username;
    const adminPassword = request.body.password;

    if (adminUsername === 'admin' && adminPassword === '1234') {
        response.render('admin');
    } else {
        response.render('invalid');
    }
});