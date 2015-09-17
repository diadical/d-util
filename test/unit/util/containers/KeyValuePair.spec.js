import { expect } from 'chai';
import KeyValuePair from '../../../../src/util/containers/KeyValuePair';

describe('KeyValuePair class', function() {
  let key = 'key',
    value = 'value';

  describe('instantiation', function() {

    it('works with key and value supplied', function() {
      let kvp = new KeyValuePair(key, value);
      expect(kvp.key).to.equal(key);
      expect(kvp.value).to.equal(value);
    });

    it('throws an error when no parameters supplied', function() {
      expect(() => new KeyValuePair()).to.throw(Error);
    });

    it('throws an error when no value parameter supplied', function() {
      expect(() => new KeyValuePair(key)).to.throw(Error);
    });

  });

  describe('properties', function() {

    beforeEach(function() {
      this.obj = new KeyValuePair(key, value);
    });

    describe('.key', function() {

      it('can get', function() {
        expect(this.obj.key).to.equal(key);
      });

      it('cannot set', function() {
        expect(() => this.obj.key = null).to.throw(TypeError);
      });

    });

    describe('.value', function() {

      it('can get', function() {
        expect(this.obj.value).to.equal(value);
      });

      it('can set', function() {
        let value2 = 'value2';
        this.obj.value = value2;
        expect(this.obj.value).to.equal(value2);
      });

    });

  });

});
