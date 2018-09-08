const chalk = require ( 'chalk' );
const request = require ('superagent');
// const bodyParser = require ('body-parser');
let home = "http://127.0.0.1:";
let rpcport = "51473"; //JSONRPC server handles only POST requests
let testnet = "51474";
let mainnet = "51472";
const credentials = require ( '../credentials' )
let pivxData = {};

exports.get_new_address = async function (req,res){
    try {
        await request
              .post (home + rpcport)
              .type ( "application/json" )
              .auth ( credentials.pivxUser, credentials.pivxPassword )
              .send ( {"jsonrpc": "1.0", "id":"curltest", "method": "getnewaddress", "params": ["myaccount"] } )
              .then ( ( res ) => {
                  // console.log(chalk.blue("***Post to PivxRpc Successfull!***"));
                  // console.log ( chalk.white ( res.body.result ) );
                  pivxData.result = res.body.result;
                  // pivxData.status = String(res.status);
                  // pivxData = String(pivxData);
                  return pivxData;
              })
      } catch(err) {
          pivxData.status = err.status
          console.log ( chalk.red ( "REQUEST ERROR in get_new_address" ) );
          return pivxData;
      };
      return pivxData.result;
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
