/* eslint-env mocha */

//import { expect } from 'chai';
import QuickSort from './QuickSort';
import sortTestHelpers from './Sort.test';

describe('QuickSort class', function() {

  sortTestHelpers.functionality(QuickSort);
  sortTestHelpers.randomised(QuickSort);

});
