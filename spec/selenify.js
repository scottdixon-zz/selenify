'use strict';

var path = require('path');
var expect = require('chai').expect;
var selenify = require(path.join(__dirname, '..', './selenify.js'));

var selenium = new selenify();

describe('selenium()', function () {
  
  this.timeout(5000);

  it('Should return a status of 0', function (done) {
    selenium.checkStatus(function(err, result){
      expect(result.body.status).to.equal(0);
      done();
    });
  });

  it('Should open firefox', function (done) {
    selenium.openBrowser("firefox", function(err, result){
      expect(result.body.status).to.equal(0);
      expect(result.body.value.browserName).to.equal('firefox');
      done();
    });
  });

});
