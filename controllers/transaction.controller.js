const mongoose = require ( 'mongoose' );
const Transaction = mongoose.model ( 'Transaction' );
const chalk = require ( 'chalk' );

//Simple version, without validation or sanitation
exports.test = function ( req, res ) {
    res.send ( 'Greetings from the transaction Test controller!' );
};
