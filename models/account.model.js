const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AccountSchema = new Schema({
    businessName: {type: String, required: false, max: 64},
    ein: {type: String, required: false, max: 64},
    password: {type: String, required: false, max: 64},
    companyType: {type: String, required: false, max: 64},
    BTC: {type: String, required: false, max: 64},
    ETH: {type: String, required: false, max: 64},
    PIVX: {type: String, required: false, max: 64},
    DCT: {type: String, required: false, max: 64},
    DAI: {type: String, required: false, max: 64},
    corporationName: {type: String, required: false, max: 64},
    closeCorp: {type: Boolean},

    registeredAgentName: {type: String, required: false, max: 64},
    agentAddress: {type: String, required: false, max: 64},
    agentCity: {type: String, required: false, max: 64},
    agentCounty: {type: String, required: false, max: 64},
    agentState: {type: String, required: false, max: 64},
    agentPostalCode: {type: String, required: false, max: 64},

    mailingAddress: {type: String, required: false, max: 64},
    mailingCity: {type: String, required: false, max: 64},
    mailingCounty: {type: String, required: false, max: 64},
    mailingState: {type: String, required: false, max: 64},
    mailingPostalCode: {type: String, required: false, max: 64},

    sameAddrs: {type: Boolean},

    officeAddress: {type: String, required: false, max: 64},
    officeCity: {type: String, required: false, max: 64},
    officeCounty: {type: String, required: false, max: 64},
    officeState: {type: String, required: false, max: 64},
    officePostalCode: {type: String, required: false, max: 64},

    shareClass: {type: String, required: false, max: 64},
    shareNumber: {type: String, required: false, max: 64},

    ownersArray: {type: Array},

    contactPerson: {type: String, required: false, max: 64},
    phoneNumber: {type: String, required: false, max: 64},
    email: {type: String, required: false, max: 64},
    formData: {type: Object}
});


// Export the model
module.exports = mongoose.model('Account', AccountSchema);
