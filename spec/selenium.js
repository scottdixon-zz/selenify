var path = require('path');
var expect = require('chai').expect;

var selenium = require(path.join(__dirname, '..', './selenium.js'));

describe('selenium()', function () {
  'use strict';

  it('Should return 1', function (done) {
    expect(selenium()).to.equal(1);
  });

});
