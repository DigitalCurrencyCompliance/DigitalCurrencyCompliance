const express = require('express');
const router = express.Router();

// Require the controllers
const home_controller = require('../controllers/home.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', home_controller.home);

// // create a wallet
// router.post('/newWallet', account_controller.test);

// // create a transaction.
// router.post('/dcc/createTransaction', account_controller.create_transaction);
//
// // monitor a transaction by its id.
// router.post('/dcc/monitorTransaction', account_controller.monitor_transaction);

module.exports = router;
