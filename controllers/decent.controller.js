const chalk = require ( 'chalk' );
const request = require ('superagent');
const bodyParser = require ('body-parser');
// http://shhack.decent.ch:8089/
let home = "http://127.0.0.1:";
let rpcport = "8093"; // local cli
// let rcpport = "8090"; // wss
// const credentials = require ( '../credentials' )
let dctData = {};
//
exports.get_new_address = async function (req,res){
    // try {
    //     await request
    //           .post (home + rpcport)
    //           .type ( "application/json" )
    //           // .auth ( credentials.dctPassword )
    //           // suggest_brain_key
    //           // returns obj {wif_priv_key, pub_key}
    //           .send ( {"method":"suggest_brain_key"} )
    //           .then ( ( res ) => {
    //               console.log(chalk.blue("***Post to DctRpc Successfull!***"));
    //               console.log ( chalk.white ( res ) );
    //               dctData.result = res;
    //               // pivxData.status = String(res.status);
    //               // pivxData = String(pivxData);
    //               return dctData.result;
    //           })
    //           // .then(
    //               // register_account ${proceduraly generated name} pub_key pub_key ${import_key owner.name wif_priv_key} true<transmit>
    //               // dctData = await res.body.operations[0].[1].name
    //           // )
    //   } catch(err) {
    //       dctData.result = err.message
    //       console.log(dctData.result);
    //       console.log ( chalk.red ( "REQUEST ERROR in decent_controller.get_new_address" ) );
    //       return dctData.result;
    //   };
      dctData.result = "500 error";
      return dctData.result;
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
