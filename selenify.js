'use strict';

var selenify = function (cb) {

  var request = require("request");
  var apiUrl = "http://localhost:4444/wd/hub";

  this.checkStatus = function(cb){
    var requestOptions = {
      uri: apiUrl + '/status',
      json: true
    }

    request(requestOptions, function (err, response) {
      cb(err, response);
    });
  }

  this.openBrowser = function(browserName, cb){
    var requestOptions = {
      uri: apiUrl + '/session',
      method: 'POST',
      json: {
        desiredCapabilities: {
          "browserName": browserName
        }
      }
    }

    request(requestOptions, function (err, response) {
      cb(err, response);
    });
  }

}

module.exports = selenify;
