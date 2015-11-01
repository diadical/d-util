/* eslint-env mocha */

//import { expect } from 'chai';
import InsertionSort from './InsertionSort';
import sortTestHelpers from './Sort.test';

describe('InsertionSort class', function() {

  sortTestHelpers.functionality(InsertionSort);

});
