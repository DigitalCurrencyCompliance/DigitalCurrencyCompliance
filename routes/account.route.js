const express = require('express');
const router = express.Router();

// Require the controllers
const account_controller = require('../controllers/account.controller');

// a simple coincap url to check that all of our files are communicating correctly.
router.get('/test', account_controller.test);

// create a new accounts
router.post('/newAccount', account_controller.new_account);

// create a BTC wallet
router.post('/newBtcWallet', account_controller.test);

// create an ETH newWallet
router.post('/newEthWallet', account_controller.test);

// this GETs the infura api Ethereum Block Data
router.get('/infura', account_controller.infura);

// creat a DCT walletAddress
router.post('./newDctWallet', account_controller.test);

// create a PIVX walletAddress
router.post('./newPivxWallet', account_controller.test);


// // create a transaction.
// router.post('/dcc/createTransaction', account_controller.create_transaction);
//
// // monitor a transaction by its id.
// router.post('/dcc/monitorTransaction', account_controller.monitor_transaction);

module.exports = router;
