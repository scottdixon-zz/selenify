'use strict';


var selenify = function (cb) {

  var request = require("request");

  this.checkStatus = function(cb){
    request({uri: 'http://localhost:4444/wd/hub/status', json:true}, function (error, response) {
      cb(response);
    });
  }
  // var options = {
  //  uri: 'http://google.com',
  //  method: 'GET',
  //  json: {
  //    your: 'json',
  //    goes: 'here'
  //  }
  // };

  

  //return 1;

}

//selenium();

module.exports = selenify;
