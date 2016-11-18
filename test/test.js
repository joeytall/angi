var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(0));
    });
    it('should return the index of the value when the value is found', function(){
      assert.equal(1, [1,2,3].indexOf(2));
    });
  });
  describe('#length()', function(){
    if('should return the length of the array', function(){
      assert.equal(5, [1,2,3,4,5].length);
    });
  });
});
