const assert = require('assert');
const sut = require('../src/utility/shaper');

describe('Utility', () => {
  describe('Shaper', () => {
    describe('getBaseIp()', () => {
      describe('When provided with 127.0.0.1', () => {
        it('Should return 127.0.0', () => {
          const testBaseIp = sut.getBaseIp('127.0.0.1');
          assert.equal(testBaseIp, '127.0.0');
        });
      });
    });
  });
});
