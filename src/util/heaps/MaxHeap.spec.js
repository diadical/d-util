/* eslint-env mocha */

import { expect } from 'chai';
import MaxHeap from './MaxHeap';
import heapTestHelpers from './Heap.test.js';

describe('MaxHeap class', function() {

  describe('instantiation', function() {

    it('works with no arguments', function() {
      expect(() => new MaxHeap()).to.not.throw(Error);
    });

  });

  heapTestHelpers.KeyValue.functionalityTests(MaxHeap, 'descending');

});
