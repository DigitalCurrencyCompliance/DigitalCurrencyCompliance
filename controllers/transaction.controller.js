const mongoose = require ( 'mongoose' );
const Transaction = mongoose.model ( 'Transaction' );
const chalk = require ( 'chalk' );

//Simple version, without validation or sanitation
exports.test = function ( req, res ) {
    res.send ( 'Greetings from the transaction Test controller!' );
};

// create transaction
exports.create_transaction = function ( req, res ) {
    res.send ( 'Greetings from the transaction Test controller!' );
};

// monitor transaction
exports.monitor_transaction = function ( req, res ) {
    res.send ( 'Greetings from the transaction Test controller!' );
};
