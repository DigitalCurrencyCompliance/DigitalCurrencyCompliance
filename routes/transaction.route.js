const express = require('express');
const router = express.Router();

// Require the controllers
const transaction_controller = require('../controllers/transaction.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', transaction_controller.test);

// create a transaction.
router.post('/createTransaction', transaction_controller.create_transaction);

// monitor a transaction by its id.
router.post('/monitorTransaction', transaction_controller.monitor_transaction);

module.exports = router;
