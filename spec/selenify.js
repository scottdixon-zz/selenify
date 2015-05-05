var path = require('path');
var expect = require('chai').expect;

var selenify = require(path.join(__dirname, '..', './selenify.js'));

var selenium = new selenify();

describe('selenium()', function () {
  'use strict';

  it('Status should return 0', function (done) {
    selenium.checkStatus(function(result){
      expect(result.body.status).to.equal(10);
      done();
    });
  });

});
