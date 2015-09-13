import { expect } from 'chai';
import util from '../../src/util';

describe('util "namespace"', function() {

  describe('contains types', function() {

    it('#KeyValuePair', function() {
      expect(util.KeyValuePair).to.exist;
    });

  });

});
