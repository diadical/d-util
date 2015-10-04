/* eslint-env mocha */

import { expect } from 'chai';
import ArrayStack from './ArrayStack';
import stackTestHelpers from './Stack.test';

describe('ArrayStack class', function() {

  describe('instantiation', function() {

    it('works with no arguments', function() {
      expect(() => new ArrayStack()).to.not.throw(Error);
    });

  });

  stackTestHelpers.propertyTests(ArrayStack);
  stackTestHelpers.functionalityTests(ArrayStack);
  stackTestHelpers.performanceTests(ArrayStack);

});
