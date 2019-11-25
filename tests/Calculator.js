import element from "protractor";
import browser from "protractor";

describe('Demo Calculator Tests', function(){

    it('Addition Test', function() {
         browser.get('http://juliemr.github.io/protractor-demo/');
         browser.sleep(3000);
         element(by.model('first')).sendKeys(1);
         element(by.model('second')).sendKeys(2);
         element(by.id('gobutton')).click();
        
         expect(element(by.className('ng-binding')).getText()).toEqual('3');
    });

    it('Subtraction Test', function() {
        
    });
    it('Multiplication Test', function() {
        
    });
});