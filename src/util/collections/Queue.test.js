/* eslint-env mocha */

import { expect } from 'chai';

export default {
  propertyTests(Ctor) {

    describe('properties', function() {

      beforeEach(function() {
        this.obj = new Ctor();
      });

      describe('#size', function() {

        it('cannot set size', function() {
          expect(() => this.obj.size = null).to.throw(TypeError);
        });

      });

    });

  },
  functionalityTests(Ctor) {

    describe('functionality', function() {

      beforeEach(function() {
        this.obj = new Ctor();
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

  },
  performanceTests() {
  }
};
