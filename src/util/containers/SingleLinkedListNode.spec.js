/* eslint-env mocha */

import { expect } from 'chai';
import SingleLinkedListNode from './SingleLinkedListNode';

describe('SingleLinkedListNode class', function() {
  let value = 'value';

  describe('instantiation', function() {

    it('works with value supplied', function() {
      var node = new SingleLinkedListNode(value);
      expect(node.value).to.equal(value);
      expect(node.next).to.equal(null);
    });

    it('throws an error when no parameters supplied', function() {
      expect(() => new SingleLinkedListNode()).to.throw(Error);
    });

  });

  describe('properties', function() {
    let value2 = 'value2';

    beforeEach(function() {
      this.obj = new SingleLinkedListNode(value);
      this.next = new SingleLinkedListNode(value2);
    });

    describe('#value', function() {

      it('can get', function() {
        expect(this.obj.value).to.equal(value);
      });

      it('cannot set', function() {
        expect(() => this.obj.value = null).to.throw(TypeError);
      });

    });

    describe('#next', function() {

      it('can get', function() {
        expect(this.obj.next).to.equal(null);
      });

      it('can set to node', function() {
        expect(() => this.obj.next = this.next).to.not.throw(Error);
        expect(this.obj.next).to.equal(this.next);
        expect(this.obj.next.value).to.equal(value2);
      });

      it('can set to null', function() {
        this.obj.next = this.next;

        expect(() => this.obj.next = null).to.not.throw(Error);
        expect(this.obj.next).to.equal(null);
      });

      it('throws error when set to invalid type', function() {
        expect(() => this.obj.next = 1).to.throw('next node must be a SingleLinkedListNode or null');
      });

    });

  });

});
