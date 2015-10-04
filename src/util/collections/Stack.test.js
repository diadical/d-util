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

  },
  performanceTests(Ctor) {

    describe('performance', function() {

      beforeEach(function() {
        this.obj = new Ctor();
      });

      it('add 100,000 items', function() {
        for (let i = 0; i <= 100000; ++i) {
          this.obj.push(i);
        }

        for (let i = 100000; i >= 0; --i) {
          expect(this.obj.pop()).to.equal(i);
        }
      });

    });

  }
};
