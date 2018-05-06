/*jshint esversion: 6 */
var express = require('express');
const mongojs = require("mongojs");
var fs =require('fs');
var mongoose=require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/');

//var databaseUrl="entry_form"; // "username:password@example.com/mydb" 
//var collections=["users","reports"]; 
//var db=require("mongojs").connect(databaseUrl,collections); 


//exports.user=db.entryForm.model('entryForms',userScheMa);

/*var UserSchema = new mongoose.Schema({
  phone: String, 
  info2: String, 
  info3: String, 
  info4: String
}); 
mongoose.model('u2', UserSchema)
var User = mongoose.model('u2');
*/
mongoose.connection.on('connected', function () {
  console.log('数据库连接成功');
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
  console.log('数据库连接出现错误，错误为：' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
  console.log('数据库连接断开');
});


class EntryForm {
  constructor() {
    this.db = mongojs("entryForms", ["entryForms"]);
    this.likeWhatDB = mongojs("entryForms", ["likeWhat"]);
    this.hashKey = "phone";
  }


  getUserList() {
    return this.db.entryForms.find().promise();
  }

  getUser(params) {
    console.log('params:', params);
    if (!params[this.hashKey]) {
      return Promise.reject(() => {
        return {
          reason: "params error , no hashKey inside"
        };
      });
    }
    let queryParam = {
      phone: params
    };
    return this.db.entryForms.findOne(queryParam).promise();
  }

  deletUser(params) {
    console.log('params:', params);
    if (!params[this.hashKey]) {
      return Promise.reject(() => {
        return {
          reason: "params error , no hashKey inside"
        };
      });
    }
    let queryParam = {
      phone: params
    };
    return this.db.entryForms.remove(queryParam).promise();
  }

  createUser(params) {
    console.log('params:',params);
    if (!params[this.hashKey]) {
      return Promise.reject(() => {
        return {
          reason: "params error , no hashKey inside"
        };
      });
    }
    return this.db.entryForms.insert(params).promise();
    /*var user = new User(
      {
        name: 'name',
        pwd: 'pwd'
      }
    )
    user.save(function (err, result) {
      if (result == null) {
        res.sendfile(__dirname + "/" + "no.html");
      } else {
        res.sendfile(__dirname + "/" + "register_OK.html");
      }
    });*/
  }
}
module.exports = EntryForm;
//export.user = db.model('users', EntryForm);