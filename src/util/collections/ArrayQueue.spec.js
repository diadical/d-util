/* eslint-env mocha */

import { expect } from 'chai';
import ArrayQueue from './ArrayQueue';
import queueTestHelpers from './Queue.test.js';

describe('ArrayQueue class', function() {

  describe('instantiation', function() {

    it('works with no arguments', function() {
      expect(() => new ArrayQueue()).to.not.throw(Error);
    });

  });

  queueTestHelpers.propertyTests(ArrayQueue);
  queueTestHelpers.functionalityTests(ArrayQueue);
  queueTestHelpers.performanceTests(ArrayQueue);

});
