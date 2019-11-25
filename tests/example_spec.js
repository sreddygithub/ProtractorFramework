import { browser } from "protractor";

describe('angularjs homepage', function() {

  it('should greet the named user', function() {
    browser.sleep(3000);
    browser.get('http://juliemr.github.io/protractor-demo/');
    
    expect(by.model('first')).sendKeys(1); 
    expect(by.model('second')).sendKeys(2);  
    
    expect(by.id('gobutton')).click();

    expect(element(by.className('ng-binding')).getText()).toEqual('3');
      // browser.get('http://www.angularjs.org');
      // element(by.model('yourName')).sendKeys('Julie');
      // var greeting = element(by.binding('yourName'));
      // expect(greeting.getText()).toEqual('Hello Julie!');
  });
   
  // describe('todo list', function() {
  //   var todoList;

  //   beforeEach(function() {
  //     browser.get('http://www.angularjs.org');

  //     todoList = element.all(by.repeater('todo in todoList.todos'));
  //   });

  //   it('should list todos', function() {
  //     expect(todoList.count()).toEqual(2);
  //     expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
  //   });

  //   it('should add a todo', function() {
  //     var addTodo = element(by.model('todoList.todoText'));
  //     var addButton = element(by.css('[value="add"]'));

  //     addTodo.sendKeys('write a protractor test');
  //     addButton.click();

  //     expect(todoList.count()).toEqual(3);
  //     expect(todoList.get(2).getText()).toEqual('write a protractor test');
  //   });
  // });
 
  // describe('Protractor Demo App', function() {
  //   it('it should have a title', function() {     
  //     browser.get('http://juliemr.github.io/protractor-demo/');      
     
      // expect(by.model('first')).sendKeys(1); 
      // expect(by.model('second')).sendKeys(2);  
      
      // expect(by.id('gobutton')).click();

      // expect(element(by.className('ng-binding')).getText()).toEqual('3');
  //element(by.model('yourName')).sendKeys('Julie');
  //   });
  // });
});


