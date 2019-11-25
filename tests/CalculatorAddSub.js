let homepage = require('../tests/homepage.js');

describe('Demo Calculator Tests', function(){

    it('Addition Test', function() {
        homepage.get('http://juliemr.github.io/protractor-demo/');
         homepage.enterFirstNumber('4');
         homepage.enterSecondNumber('3');
         homepage.clickGo();

         homepage.verifyResult('7');
    });

    it('Subtraction Test', function() {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.clickGo();

        homepage.verifyResult('10');
    });
  
});