var assert = require('assert'),
    vows = require('vows'),
    stupidNullLogic = require('../');

vows.describe('stupid-null-logic').addBatch({
  'When performing stupid null logic': {
    topic: stupidNullLogic.greaterOrEqualThan(null,0),
    'result should be valid': function (result) {
      assert.isBoolean(result);
      assert.equal(result, false);
    }
  }
}).export(module);

