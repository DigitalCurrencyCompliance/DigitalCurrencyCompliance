const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TransactionSchema = new Schema({
    dateStamp: {type: String, required: false, max: 64},
    amount: {type: Number, required: false},
    transactionId: {type: String, required: false, max: 64},
    walletAddress: {type: String, required: false, max: 64},
    status: {type: String, required: false, default: "pending", max: 32},
    usDollarEquiv: {type: Number, required: false, max: 64},
    taxable: {type: Boolean, required: false},
    taxCollected: {type: String, required: false, max: 64},
    rawTx: {type: String, required: false}
});


// Export the model
module.exports = mongoose.model('Transaction', TransactionSchema);
