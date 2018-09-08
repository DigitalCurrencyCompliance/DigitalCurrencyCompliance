const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AccountSchema = new Schema({
    currency: {type: String, required: false, max: 64},
    amount: {type: Number, required: false},
    transactionId: {type: String, required: false, max: 64},
    walletAddress: {type: String, required: false, max: 64},
    status: {type: String, required: true, default: "pending", max: 32},
    productId: {type: String, required: false, max: 64},
    unconfirmed: {type: Number, required: false, max: 64},
    mined: {type: Boolean, required: false},
    recordBlock: {type: String, required: false, max: 64},
    rawTx: {type: String, required: false}
});


// Export the model
module.exports = mongoose.model('Account', AccountSchema);
