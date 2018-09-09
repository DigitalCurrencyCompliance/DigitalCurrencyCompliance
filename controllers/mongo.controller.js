const mongoose = require ( 'mongoose' );
const Account = mongoose.model ( 'Account' );
const chalk = require ( 'chalk' );
const request = require( 'superagent' );

exports.find_by_id = async function (req, res) {
  let dbData;
  await Account.findById( req.body._id, function (err,response){
      if (err) {
        console.log('TestThree3', err);
      } else {
        dbData = response;
        console.log('TestTwo2', dbData)
      }
    }
  );
  res.send(dbData);
  console.log('TestOne1', dbData);
}

exports.find_all = async function (req, res) {
  let dbData;
  await Account.find( function (err,response){
      if (err) {
        console.log('TestThree3', err);
      } else {
        dbData = response;
        console.log('TestTwo2', dbData)
      }
    }
  );
  res.send(dbData);
  console.log('TestOne1', dbData);
}
