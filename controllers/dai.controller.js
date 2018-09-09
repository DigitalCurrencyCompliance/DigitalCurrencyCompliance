const chalk = require ( 'chalk' );
const request = require ('superagent');
const Web3 = require ('web3');
const Accounts = require('web3-eth-accounts');
const accounts = new Accounts('ws://localhost:3030');
// const bodyParser = require ('body-parser');

// web3 provider stuff =====================================================================

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));

exports.get_new_address = async function (req,res) {
    console.log(chalk.blue("*** ETH GET NEW ADDRESS ***"));
    let daiData = {};
    try {
        daiData = await web3.eth.accounts.create();
                  console.table(daiData);
                  daiData.result = daiData.address;
                  return daiData.result;
        } catch(err) {
            daiData.result = err.message
            console.log ( chalk.red ( "REQUEST ERROR in get_new_address" ) );
            return daiData.result;
     }
     // console.log(chalk.yellow (ethData.result));
     return daiData.result;
}
