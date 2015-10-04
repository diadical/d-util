/* eslint-env mocha */

import { expect } from 'chai';
import LinkedListQueue from './LinkedListQueue';
import queueTestHelpers from './Queue.test.js';

describe('LinkedListQueue class', function() {

  describe('instantiation', function() {

    it('works with no arguments', function() {
      expect(() => new LinkedListQueue()).to.not.throw(Error);
    });

  });

  queueTestHelpers.propertyTests(LinkedListQueue);
  queueTestHelpers.functionalityTests(LinkedListQueue);

});
