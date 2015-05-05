'use strict';

var selenify = function (cb) {

  var request = require("request");
  var apiUrl = "http://localhost:4444/wd/hub";
  
  this.sessionId;

  this.checkStatus = function(cb){
    var requestOptions = {
      uri: apiUrl + '/status',
      json: true
    }

    request(requestOptions, function (err, response) {
      cb(err, response.body.status);
    });
  }

  this.openBrowser = function(browserName, cb){
    var self = this;
    var requestOptions = {
      uri: apiUrl + '/session',
      method: 'POST',
      json: {
        desiredCapabilities: {
          browserName: browserName
        }
      }
    }

    request(requestOptions, function (err, response) {
      //Save session ID
      self.sessionId = response.body.sessionId;
      cb(err, response.body);
    });
  }

  this.navigateToURL = function(url, cb){
    var requestOptions = {
      uri: apiUrl + '/session/' + this.sessionId + '/url',
      method: 'POST',
      json: {
        url: url
      }
    }

    request(requestOptions, function (err, response) {
      cb(err, response.body);
    });
  }

  this.getPageTitle = function(cb){
    var requestOptions = {
      uri: apiUrl + '/session/' + this.sessionId + '/title',
      json: true
    }

    request(requestOptions, function (err, response) {
      cb(err, response.body.value);
    });
  }

  this.findHTMLElement = function(using, value, cb){
    var requestOptions = {
      uri: apiUrl + '/session/' + this.sessionId + '/element',
      method: 'POST',
      json: {
        using: using,
        value: value
      }
    }

    request(requestOptions, function (err, response) {
      cb(err, response.body.value.ELEMENT);
    });
  }

}

module.exports = selenify;
