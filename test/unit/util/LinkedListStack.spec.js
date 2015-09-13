import { expect } from 'chai';
import LinkedListStack from '../../../src/util/LinkedListStack';

describe('LinkedListStack class', function() {

  describe('instantiation', function() {

    it('works with no arguments', function() {
      let obj = new LinkedListStack();
      expect(obj.first).to.be.undefined;
    });

  });

  describe('property constraints', function() {

    beforeEach(function() {
      this.obj = new LinkedListStack();
    });

    it('cannot set size', function() {
      expect(() => this.obj.size = null).to.throw(TypeError);
    });

  });

  describe('functionality', function() {

    beforeEach(function() {
      this.obj = new LinkedListStack();
    });

    it('can push values', function() {
      let value = 'val';
      for (let i = 1; i <= 10; ++i) {
        this.obj.push(value + i);
        expect(this.obj.size).to.equal(i);
      }
    });

    it('can pop values in order', function() {
      let value = 'val';
      for (let i = 1; i <= 10; ++i) {
        this.obj.push(value + i);
      }

      for (let i = 10; i > 0; --i) {
        expect(this.obj.pop()).to.equal(value + i);
      }
    });

  });

  describe('performance', function() {

  });

});
