describe('boardController',function(){

describe('board members view', function() {

    beforeEach(function() {
      browser.get('index.html');
    });
	  var boardList = element.all(by.repeater('x in names'));
	    expect(boardList.count()).toBe(15);




});