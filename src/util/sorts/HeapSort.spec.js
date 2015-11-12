/* eslint-env mocha */

//import { expect } from 'chai';
import HeapSort from './HeapSort';
import sortTestHelpers from './Sort.test';

describe('HeapSort class', function() {

  sortTestHelpers.functionality(HeapSort);
  sortTestHelpers.randomised(HeapSort, true);

});
