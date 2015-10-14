/* eslint-env mocha */

import { expect } from 'chai';
import KeyValueHeap from './KeyValueHeap';
import KeyValuePairComparator from '../comparators/KeyValuePairComparator';
import heapTestHelpers from './Heap.test.js';

describe('KeyValueHeap class', function() {

  describe('instantiation', function() {

    it('fails with no arguments', function() {
      expect(() => new KeyValueHeap()).to.throw('KeyValueHeap: comparator is mandatory');
    });

    it('fails when comparator is not an instance of Comparator', function() {
      expect(() => new KeyValueHeap({})).to.throw('KeyValueHeap: comparator must be instance of KeyValuePairComparator');
    });

    it('works when valid comparator is passed in', function() {
      expect(() => new KeyValueHeap(KeyValuePairComparator.ascending)).to.not.throw(Error);
      expect(() => new KeyValueHeap(KeyValuePairComparator.descending)).to.not.throw(Error);
    });

    it('works when sub class of Comparator is passed in', function() {
      class SubComparator extends KeyValuePairComparator {}

      expect(() => new KeyValueHeap(new SubComparator())).to.not.throw(Error);
    });

  });

  heapTestHelpers.KeyValue.functionalityTests(KeyValueHeap, 'ascending');
  heapTestHelpers.KeyValue.functionalityTests(KeyValueHeap, 'descending');

});
