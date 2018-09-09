const mongoose = require ( 'mongoose' );
const Account = mongoose.model ( 'Account' );
const chalk = require ( 'chalk' );
const request = require( 'superagent' );
const pivx_controller = require('./pivx.controller');
const ethereum_controller = require('./ethereum.controller');
const dedent_controller = require('./decent.controller');
const dai_controller = require('./dai.controller');

// returns a message for testing routes
exports.msg = function (req, res) {
  res.send("Generic Success Message");
}

//Simple version, without validation or sanitation
exports.test = async function ( req, res ) {
  let response;
  try{
    await request
    .get('http://coincap.io/page/LTC')
    .then((res) =>{
        // console.log(res.body);
        response = res.body;
    })
  } catch(err){
      console.log(err);
    }
  res.send (response);
}

exports.eth = async function ( req, res ) {
  let response;
  try{
    await request
    .get('http://coincap.io/page/LTC')
    .then((res) =>{
        console.log(res.body);
        response = res.body;
    })
  } catch(err){
      console.log(err);
    }
  res.send (response);
}

exports.infura = async function ( req, res ) {
  let response;
  try{
    await request
    .get('https://api.infura.io/v1/jsonrpc/mainnet/eth_getBlockByNumber?params=["latest",false]')
    .then((res) =>{
        console.log(res.body);
        response = res.body;
    })
  } catch(err){
      console.log(err);
    }
  res.send (response);
}

exports.new_account = async function ( req, res ) {
  let ethData;
  let pivxData;
  let dctData;
  let daiData;
  let newAccount = new Account (
    {
      ein: req.body.ein,
      password: req.body.password,
      companyType: req.body.companyType,
      BTC: req.body.BTC,
      ETH: req.body.ETH,
      PIVX: req.body.PIVX,
      DCT: req.body.DCT,
      DAI: req.body.DAI
    }
  );

  // await new BTC walletAddress

  // await new ETH walletAddress

  //
  console.log('shark nado');
  ethData = await ethereum_controller.get_new_address();
  newAccount.ETH = ethData;

  // await new PIVX walletAddress
  pivxData = await pivx_controller.get_new_address();
  newAccount.PIVX = pivxData;
  //
  // // await new DCT walletAddress
  // dctData = await decent_controller.get_new_address();
  // newAccount.DCT = dctData;

  // await new DAI walletAddress
  daiData = await dai_controller.get_new_address();
  newAccount.DAI = daiData;

  //save account object to the database
  newAccount.save ( function ( err, dbResponse ) {
    if ( err ) {
      res.send( err );
    }
    console.log ( "***" + chalk.white( dbResponse ) + "***" );
    res.send ( dbResponse );
  });
}

// // vvv create method *** This is where the magic happens ***********************
// exports.create_transaction = async function ( req, res ) {
//     let pivxData = {};
//     // req.body.currency != "PIV" && console.log("This aint PIV!");
//     console.log ( "***create_transaction" );
//     // error first error handling
//     if ( req.body.currency !== "PIV" ){
//         console.log ( chalk.red ( "failed" ) + "***" );
//         res.send ( 'This API is only configured to accept PIV' );
//         return;
//     } else {
//             // new transaction object.
//             let newApi = new Api (
//                   {
//                     currency : req.body.currency,
//                     amount : req.body.amount,
//                     status : null
//                   }
//             );
//             // gets a new address for this transaction
//             pivxData = await rpc_controller.get_new_address();
//             newApi.status = pivxData.status;
//             newApi.walletAddress = pivxData.result;
//
//             // save transaction object to the database.
//             newApi.save ( function ( err, dbResponse ) {
//               if ( err ) {
//                 res.send( err );
//               }
//               console.log ( chalk.white( dbResponse ) +"***" );
//               res.send ( {"transactionID" : dbResponse._id, "walletAddress" : dbResponse.walletAddress });
//             });
//
//     }
// }
// // ^^^ create method *** The magic lives within you! ***************************
//
//
// // vvv monitor method (is also a post method)
// exports.monitor_transaction = async function ( req, res ) {
//   console.log ( "***monitor_transaction***" );
//   console.log ( req.body.transactionID );
//   let dbData = {};
//   let pivxData = {};
//   let apiResponse = {};
//
//   // here we query the db by _id first to get the walletAddress, then we querry
//   // PIVX by walletAddress to get the amount received.
//   try {
//       Api.findById( req.body.transactionID, function (err,res){
//         if (err) return (err);
//         dbData = res;
//       }).then(async (res)=>{
//         pivxData = await rpc_controller.get_received_by_address(dbData.walletAddress)
//       }).then(()=>{
//         console.log("dbData.walletAddress is " + dbData.walletAddress);
//         console.log("pivxData.result is " + pivxData.result);
//       }).then(async ()=>{
//         if (pivxData.result >= dbData.amount){
//           console.log(chalk.blue("Hey! They match!"));
//           await Api.findByIdAndUpdate(
//             req.body.transactionID,
//             {"status": "success"},
//             async function (err, result) {
//               if (err) return (err);
//               console.log(chalk.blue("success callback"));
//               apiResponse = await send_db_response(req.body.transactionID, res);
//
//             }
//           );
//         } else {
//           console.log(chalk.blue("The balance hasn't been paid"));
//           await Api.findByIdAndUpdate(
//             req.body.transactionID,
//             {"status": "pending"},
//             async function (err, result) {
//               if (err) return (err);
//               console.log(chalk.red("pending callback"));
//               apiResponse = await send_db_response(req.body.transactionID, res);
//             }
//           )
//         }
//
//       }).then(async()=>{
//         // console.log("apiResponse is "+apiResponse);
//         // console.log(apiResponse);
//         // await res.send(apiResponse)
//
//       })
//
//   } catch(err){console.log("catch error");}
// };
//
//
//
//   // send_db_response is a callback that only sends a response to the user after
//   // the status has been updated in the database.
// async function send_db_response(req, res){
//   await Api.findById ( req, function ( err, dbResponse ) {
//     if ( err ) return ( err );
//     console.log(chalk.yellow("send_db_response fired!"));
//     console.log(`{ "transactionID" : ${dbResponse._id}, "status" : ${dbResponse.status} }`);
//     res.send ( { "transactionID" : dbResponse._id, "status" : dbResponse.status } );
//   });
// }
// // ^^^ monitor method (is also a post method)
