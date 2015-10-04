/* eslint-env mocha */

import { expect } from 'chai';
import LinkedListStack from './LinkedListStack';
import stackTestHelpers from './Stack.test';

describe('LinkedListStack class', function() {

  describe('instantiation', function() {

    it('works with no arguments', function() {
      expect(() => new LinkedListStack()).to.not.throw(Error);
    });

  });

  stackTestHelpers.propertyTests(LinkedListStack);
  stackTestHelpers.functionalityTests(LinkedListStack);
  stackTestHelpers.performanceTests(LinkedListStack);

});
