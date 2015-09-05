import { expect } from 'chai';
import KeyValuePair from '../../../src/util/KeyValuePair';

describe('KeyValuePair class', () => {
  it('exists', () => {
    expect(KeyValuePair).to.exist;
  });

  describe('instantiation', () => {
    let key = 'key',
      value = 'value';

    it('works with key and value supplied', () => {
      let kvp = new KeyValuePair(key, value);

      expect(kvp.key).to.equal(key);
      expect(kvp.value).to.equal(value);
    });

    it('throws an error when no parameters supplied', () => {
      expect(() => new KeyValuePair()).to.throw(Error);
    });

    it('throws an error when no value parameter supplied', () => {
      expect(() => new KeyValuePair('key`')).to.throw(Error);
    });
  });
});
