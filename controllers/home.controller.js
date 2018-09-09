const mongoose = require ( 'mongoose' );
const chalk = require ( 'chalk' );

//Simple version, without validation or sanitation
exports.home = function ( req, res ) {
    res.send ( 'Welcome to the Digital Currency Compliance homepage!' );
};
