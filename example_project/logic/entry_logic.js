/*jshint esversion: 6 */
let entryDB = new (require("../models/entry_db"))();

exports.createUser = function(params) {
  return new Promise((resolve, reject) => {
    //_validateParams
    entryDB
      .createUser(params)
      .then(result => {
        console.log("result:", result);
        resolve({ success: result });
      })  
      .catch(error => {
        reject(`[entry] createUser error => ${error}`);
      });
  });
};
exports.getUserList = function () {
  return new Promise((resolve, reject) => {
    //_validateParams
    entryDB
      .getUserList()
      .then(result => {
        console.log("result:", result);
        resolve({ success: result });
      })
      .catch(error => {
        reject(`[entry] getuserlist error => ${error}`);
      });
  });
};
exports.getUser = function (params) {
  return new Promise((resolve, reject) => {
    //_validateParams
    entryDB
      .getUser(params)
      .then(result => {
        console.log("result:", result);
        resolve({ success: result });
      })
      .catch(error => {
        reject(`[entry] getuserlist error => ${error}`);
      });
  });
};
exports.deletUser = function (params) {
  return new Promise((resolve, reject) => {
    //_validateParams
    entryDB
      .deletUser(params)
      .then(result => {
        console.log("result:", result);
        resolve({ success: result });
      })
      .catch(error => {
        reject(`[entry] getuserlist error => ${error}`);
      });
  });
};