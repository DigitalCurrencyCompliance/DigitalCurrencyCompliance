const chalk = require ( 'chalk' );
const request = require ('superagent' );
const bitcore = require ( 'bitcore-lib' )
// const bodyParser = require ('body-parser');
let home = "http://127.0.0.1:";
// let rpcport = "51473"; // JSONRPC server handles only POST requests
// let testnet = "51474";
// let mainnet = "51472";
const credentials = require ( '../credentials' )
let btcData = {};

exports.get_new_address = async function (req,res){
      // create new bitcoin address
      let rand_buffer = bitcore.crypto.Random.getRandomBuffer(32);
      let rand_number = bitcore.crypto.BN.fromBuffer(rand_buffer);
      let rand_string = rand_number.toString();

      let pKey = credentials.btcPrivKey;
      let privateKey = bitcore.PrivateKey.fromWIF(pKey);
      let address = privateKey.toAddress();
      console.log(chalk.white(address));

      let value = new Buffer(rand_string);
      let hash = bitcore.crypto.Hash.sha256(value);
      let bn = bitcore.crypto.BN.fromBuffer(hash);
      // let newAddress = new bitcore.PrivateKey(bn, 'testnet').toAddress();
      // let newAddress = bitcore.getNewAddress(privateKey);

      // console.log("newAddress:");
      // console.log(typeof newAddress);
      // console.log(newAddress);
      // newAddress =
      // console.log(newAddress[0]);
    // try {
    //     await request
    //           .post (home + rpcport)
    //           .type ( "application/json" )
    //           .auth ( credentials.pivxUser, credentials.pivxPassword )
    //           .send ( {"jsonrpc": "1.0", "id":"curltest", "method": "getnewaddress", "params": ["myaccount"] } )
    //           .then ( ( res ) => {
    //               // console.log(chalk.blue("***Post to PivxRpc Successfull!***"));
    //               // console.log ( chalk.white ( res.body.result ) );
    //               pivxData.result = res.body.result;
    //               // pivxData.status = String(res.status);
    //               // pivxData = String(pivxData);
    //               return pivxData;
    //           })
    //   } catch(err) {
    //       pivxData.result = err.message
    //       console.log(pivxData.result);
    //       console.log ( chalk.red ( "REQUEST ERROR in get_new_address" ) );
    //       return pivxData.result;
    //   };
      btcData.result = pKey;
      return btcData.result;
}

// exports.get_received_by_address = async function (req,res){
//     console.log("***this is what gets passed to get_received_by_address***");
//     console.log(req);
//     try {
//         await request
//               .post (home + rpcport)
//               .type ( "application/json" )
//               .auth ( credentials.rpcuser, credentials.rpcpassword )
//               .send ( `{"jsonrpc": "1.0", "id":"curltest", "method": "getreceivedbyaddress", "params": ["${req}"] }` )
//               .then ( ( res ) => {
//                   console.log(chalk.blue("***Post to PivxRpc Successfull!***"));
//                   console.log ( chalk.white ( res.body.result ) );
//                   pivxData.result = res.body.result;
//                   console.log(typeof pivxData.result);
//                   console.log(chalk.yellow(pivxData.result));
//                   pivxData.status = String(res.status);
//                   // DEBUG: manipulate the ammount of PIVX received here.
//                   // pivxData.result = "20";
//                   console.log("the debug value has been set to " + pivxData.result );
//                   return pivxData;
//               })
//       } catch(err) {
//           pivxData.status = err.status
//           console.log ( chalk.red ( "REQUEST ERROR in get_received_by_address" ) );
//           return pivxData;
//       };
//       return pivxData;
// }
