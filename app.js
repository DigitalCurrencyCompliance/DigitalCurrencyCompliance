// app.js
const express = require('express');
const bodyParser = require('body-parser');
const credentials = require('./credentials');
const chalk = require('chalk');
// initialize our express ap
const app = express();
// directs app to use bodyParser, moved immediately below app declaration so
// that bodyParser works universally.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let port = process.env.SERVER_PORT;


// vvv Set up mongoose connection
const mongoose = require('mongoose');
// REVIEW: register schemas
require('./models/account.model.js');
require('./models/transaction.model.js');

let dev_db_url = `mongodb://${credentials.user}:${credentials.password}@ds249942.mlab.com:49942/digital_currency_compliance`;
// let dev_db_url = 'mongodb://localhost:27017/marketplaceDB';
// REVIEW: mongoDB switch statment
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
// test MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
let accountDB = db.collection("accounts");
let transactionDB = db.collection("transactions")
// ^^^ Set up mongoose connection

// Imports routes for the products
const account = require('./routes/account.route.js');
const transaction = require('./routes/transaction.route.js');
const home = require('./routes/home.route.js');
// directs app to use var api for route api
app.use('/account', account);
app.use('/transaction', account);
app.use('/', home);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
// test MongoDB connection

    console.log(
        accountDB != null ?
        accountDB.name + " database found" :
        accountDB.name + " database not found"
    );
});
