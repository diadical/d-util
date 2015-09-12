import { expect } from 'chai';
import LinkedListQueue from '../../../src/util/LinkedListQueue';

describe('LinkedListQueue class', () => {

  describe('instantiation', () => {
    it('works with no arguments', function() {
      let obj = new LinkedListQueue();
      expect(obj.first).to.be.undefined;
    });
  });

  describe('property constraints', () => {
    beforeEach(function() {
      this.obj = new LinkedListQueue();
    });

    it('cannot set size', function() {
      expect(() => this.obj.size = null).to.throw(TypeError);
    });
  });

  describe('functionality', () => {
    beforeEach(function() {
      this.obj = new LinkedListQueue();
    });

    it('can enqueue values', function() {
      let value = 'val';
      for (let i = 1; i <= 10; ++i) {
        this.obj.enqueue(value + i);
        expect(this.obj.size).to.equal(i);
      }
    });

    it('can dequeue values in order', function() {
      let value = 'val';
      for (let i = 1; i <= 10; ++i) {
        this.obj.enqueue(value + i);
      }

      for (let i = 1; i <= 10; ++i) {
        expect(this.obj.dequeue()).to.equal(value + i);
      }
    });

  });

});
