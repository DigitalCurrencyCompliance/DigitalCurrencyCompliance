const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AccountSchema = new Schema({
    ein: {type: String, required: true, max: 64},
    password: {type: String, required: true, max: 64},
    companyType: {type: String, required: true, max: 64},
    BTC: {type: String, required: false, max: 64},
    ETH: {type: String, required: false, max: 64},
    PIVX: {type: String, required: false, max: 64},
    DCT: {type: String, required: false, max: 64},
    DAI: {type: String, required: false, max: 64}
});


// Export the model
module.exports = mongoose.model('Account', AccountSchema);
