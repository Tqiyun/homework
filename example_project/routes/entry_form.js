/*jshint esversion: 6 */
var express = require("express");
var router = express.Router();
var enrty_logic = require("../logic/entry_logic");

let http=require('http');
let qs =require('querystring');
/* GET users listing. */
//'http://localhost:3000/entry_form/userlist'
router.get("/", function(req, res, next) {
  res.send("./public/sign_up");
});

router.get("/getuser", function (req, res, next) {
  params = req.query;
  res.send(params);
  res.send(enrty_logic.getUser(params));
});

router.get("/deletuser", function (req, res, next) {
  params = req.query;
  res.send(params);
  res.send(enrty_logic.deletUser(params));
});

router.get("/userlist", (req, res, next) => {
  /*let params = {
    phone: "123456",
    HDAS: "kDLSAKD"
  };
  // console.log(
  //   `[entryForm] userlist params => ${JSON.stringify(params, null, 4)}`
  // );
  res.send(params);*/
  res.send(enrty_logic.getUserList());
});


router.post("/new", (req, res, next) => {
  var params=req.body;
  /*req.on('data',function(chunk){
    params+=chunk;
  });*/
  /*req.on('end',function(){
    try{
      jsonString=JSON.parse(params);
    }
    catch(err){
      jsonString=null;
    }
  });*/
  /*let params = {
    phone: "123456"
  };*/
  enrty_logic.createUser(params)
    .then(result => {
      console.log(
        `[entryForm] userlist params => ${JSON.stringify(params, null, 4)}`
      );
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
});
  //.then(result => { enrty_logic.createUser(jsonString)
    //console.log(
     // `[entryForm] userlist params => ${JSON.stringify(params, null, 4)}`
   // );
    //res.json(result);
 // })
  //.catch(err => {
    //res.json(err);
  //});
//});

module.exports = router;