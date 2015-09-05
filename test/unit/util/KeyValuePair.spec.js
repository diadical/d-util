import { expect } from 'chai';
import KeyValuePair from '../../../src/util/KeyValuePair';

describe('KeyValuePair class', () => {
  let key = 'key',
    value = 'value';

  describe('instantiation', () => {
    it('works with key and value supplied', () => {
      let kvp = new KeyValuePair(key, value);

      expect(kvp.key).to.equal(key);
      expect(kvp.value).to.equal(value);
    });

    it('throws an error when no parameters supplied', () => {
      expect(() => new KeyValuePair()).to.throw(Error);
    });

    it('throws an error when no value parameter supplied', () => {
      expect(() => new KeyValuePair(key)).to.throw(Error);
    });
  });

  describe('properties', () => {
    let obj;

    beforeEach(() => {
      obj = new KeyValuePair(key, value);
    });

    describe('.key', () => {
      it('can get', () => {
        expect(obj.key).to.equal(key);
      });

      it('cannot set', () => {
        expect(() => obj.key = null).to.throw(TypeError);
      });
    });

    describe('.value', () => {
      it('can get', () => {
        expect(obj.value).to.equal(value);
      });

      it('can set', () => {
        let value2 = 'value2';
        obj.value = value2;
        expect(obj.value).to.equal(value2);
      });
    });
  });
});
