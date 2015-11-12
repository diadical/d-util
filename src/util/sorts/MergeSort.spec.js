/* eslint-env mocha */

//import { expect } from 'chai';
import MergeSort from './MergeSort';
import sortTestHelpers from './Sort.test';

describe('MergeSort class', function() {

  sortTestHelpers.functionality(MergeSort);
  sortTestHelpers.randomised(MergeSort, true);

});
