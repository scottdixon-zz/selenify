'use strict';

var path = require('path');
var expect = require('chai').expect;
var selenify = require(path.join(__dirname, '..', './selenify.js'));

var selenium = new selenify();

describe('selenium()', function () {
  
  // Since we're dealing with network requests,
  // increase mocha's timeout to 10 seconds.
  this.timeout(10000);

  var elementId;

  it('Should return a status of 0', function (done) {
    selenium.checkStatus(function(err, status){
      expect(status).to.equal(0);
      done();
    });
  });

  it('Should open browser & create session', function (done) {
    selenium.openBrowser("firefox", function(err, result){
      expect(result.status).to.equal(0);
      expect(result.value.browserName).to.equal('firefox');
      expect(selenium.sessionId).to.be.an('string');
      done();
    });
  });

  it('Should navigate to URL', function (done) {
    selenium.navigateToURL("http://google.com", function(err, result){
      expect(result.status).to.equal(0);
      done();
    });
  });

  it('Should get the page title', function (done) {
    selenium.getPageTitle(function(err, title){
      expect(title).to.equal("Google");
      done();
    });
  });

  it('Should find HTML element by name', function (done) {
    selenium.findHTMLElement({ using: "name", value: "q" },function(err, element){
      expect(element).to.exist;
      elementId = element;
      done();
    });
  });

  it('Should type text inside HTML element', function (done) {
    selenium.typeInsideElement(elementId, "Hello World".split(''),function(err, response){
      expect(response.status).to.equal(0);
      done();
    });
  });

  
  it('Should close the browser', function (done) {
    // Wrap this in a timeout so we can see the last test finish
    // before the browser closes.
    setTimeout(function(){
      selenium.closeBrowser(function(err, response){
        expect(response.status).to.equal(0);
        done();
      });
    }, 2000);
  });

});
