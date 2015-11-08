/* eslint-env mocha */

//import { expect } from 'chai';
import SelectionSort from './SelectionSort';
import sortTestHelpers from './Sort.test';

describe('SelectionSort class', function() {

  sortTestHelpers.functionality(SelectionSort);
  sortTestHelpers.randomised(SelectionSort);

});
