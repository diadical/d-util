import { expect } from 'chai';
import util from '../../src/util';

describe('util "namespace"', () => {
  describe('contains types', () => {
    it('#KeyValuePair', () => {
      expect(util.KeyValuePair).to.exist;
    });
  });
});
