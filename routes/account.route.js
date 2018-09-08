const express = require('express');
const router = express.Router();

// Require the controllers
const account_controller = require('../controllers/account.controller');

// a simple coincap url to check that all of our files are communicating correctly.
router.get('/test', account_controller.test);

// create a new accounts
router.post('/newAccount', account_controller.new_account);

// this GETs the infura api Ethereum Block Data
router.get('/infura', account_controller.infura);


// // create a transaction.
// router.post('/dcc/createTransaction', account_controller.create_transaction);
//
// // monitor a transaction by its id.
// router.post('/dcc/monitorTransaction', account_controller.monitor_transaction);

module.exports = router;
