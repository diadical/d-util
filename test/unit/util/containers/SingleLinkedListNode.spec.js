import { expect } from 'chai';
import SingleLinkedListNode from '../../../../src/util/containers/SingleLinkedListNode';

describe('SingleLinkedListNode class', () => {
  let value = 'value';

  describe('instantiation', () => {

    it('works with value supplied', () => {
      var node = new SingleLinkedListNode(value);

      expect(node.value).to.equal(value);
      expect(node.next).to.equal(null);
    });

    it('throws an error when no parameters supplied', () => {
      expect(() => new SingleLinkedListNode()).to.throw(Error);
    });

  });

  describe('properties', () => {
    let value2 = 'value2',
      next, obj;

    beforeEach(() => {
      obj = new SingleLinkedListNode(value);
      next = new SingleLinkedListNode(value2);
    });

    describe('.value', () => {

      it('can get', () => {
        expect(obj.value).to.equal(value);
      });

      it('cannot set', () => {
        expect(() => obj.value = null).to.throw(TypeError);
      });

    });

    describe('.next', () => {

      it('can get', () => {
        expect(obj.next).to.equal(null);
      });

      it('can set to node', () => {
        expect(() => obj.next = next).to.not.throw(TypeError);
        expect(obj.next).to.equal(next);
        expect(obj.next.value).to.equal(value2);
      });

      it('can set to null', () => {
        obj.next = next;

        expect(() => obj.next = null).to.not.throw(TypeError);
        expect(obj.next).to.equal(null);
      });

      it('throws error when set to invalid type', () => {
        expect(() => obj.next = 1).to.throw(TypeError);
      });

    });

  });

});
