/* eslint-env mocha */

import { expect } from 'chai';
import MinHeap from './MinHeap';
import heapTestHelpers from './Heap.test.js';

describe('MinHeap class', function() {

  describe('instantiation', function() {

    it('works with no arguments', function() {
      expect(() => new MinHeap()).to.not.throw(Error);
    });

  });

  heapTestHelpers.KeyValue.functionalityTests(MinHeap, 'ascending');

});
