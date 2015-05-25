var expect = require('chai').expect;
var jsdom = require('../index');

describe('skipWindowCheck: true', function () {

  before(function () {
    global.window = {};
  });

  after(function () {
    delete global.window;
  });

  jsdom({ skipWindowCheck: true });

  it('does not throw errors', function () {
    var div = document.createElement('div');
    expect(div.nodeName).eql('DIV');
  });

});
