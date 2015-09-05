import { expect } from 'chai';
import util from '../../src/util';

describe('util "namespace"', () => {
  it('exists', () => {
    expect(util).to.exist;
  });

  describe('contains property', () => {
    it('KeyValuePair', () => {
      expect(util.KeyValuePair).to.exist;
    });
  });
});
