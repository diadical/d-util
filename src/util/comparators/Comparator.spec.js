/* eslint-env mocha */

import { expect } from 'chai';
import Comparator from './Comparator';

describe('Comparator class', function() {

  describe('instantiation', function() {

    it('can be instantiated with no arguments', function() {
      expect(() => new Comparator()).to.not.throw(Error);
    });

    it('can be instantiated with descendingOrder = false', function() {
      expect(() => new Comparator(false)).to.not.throw(Error);
    });

    it('can be instantiated with descendingOrder = true', function() {
      expect(() => new Comparator(true)).to.not.throw(Error);
    });

  });

  [
    {
      prop: 'ascending',
      multiplier: 1
    },
    {
      prop: 'descending',
      multiplier: -1
    }
  ].forEach(context => {
    describe('#' + context.prop, function() {

      beforeEach(function() {
        this.obj = Comparator[context.prop];
      });

      it('returns an instance of Comparator', function() {
        expect(Comparator).to.have.property(context.prop);
        expect(this.obj).to.be.an.instanceof(Comparator);
      });

      it('always returns the same object', function() {
        expect(this.obj).to.equal(Comparator[context.prop]);
      });

      describe('#compare', function() {

        it('returns 0 when both numbers are the same', function() {
          for (let i = -200; i <= 200; i += 17) {
            expect(this.obj.compare(i, i)).to.equal(0);
          }
        });

        it('returns -1 when first number is less than the second', function() {
          for (let i = -200; i <= 200; i += 17) {
            expect(this.obj.compare(i, i + 7 * context.multiplier)).to.equal(-1);
          }
        });

        it('returns 1 when first number is greater than the second', function() {
          for (let i = -200; i <= 200; i += 17) {
            expect(this.obj.compare(i, i - 7 * context.multiplier)).to.equal(1);
          }
        });

      });

      describe('#equals', function() {

        it('returns true when both numbers are the same', function() {
          for (let i = -200; i <= 200; i += 17) {
            expect(this.obj.equals(i, i)).to.be.true;
          }
        });

        it('returns false when both numbers are not the same', function() {
          for (let i = -200; i <= 200; i += 17) {
            expect(this.obj.equals(i, i - 7)).to.be.false;
            expect(this.obj.equals(i, i + 7)).to.be.false;
          }
        });

      });

      describe('#lessThan', function() {

        it('returns true when first number is less than the second', function() {
          for (let i = -200; i <= 200; i += 17) {
            expect(this.obj.lessThan(i, i + 7 * context.multiplier)).to.be.true;
          }
        });

        it('returns false when first number is greater or equal to the second', function() {
          for (let i = -200; i <= 200; i += 17) {
            expect(this.obj.lessThan(i, i)).to.be.false;
            expect(this.obj.lessThan(i, i - 7 * context.multiplier)).to.be.false;
          }
        });

      });

      describe('#greaterThan', function() {

        it('returns true when first number is larger than second', function() {
          for (let i = -200; i <= 200; i += 17) {
            expect(this.obj.greaterThan(i, i - 7 * context.multiplier)).to.be.true;
          }
        });

        it('returns false when first number is smaller or equal to the second', function() {
          for (let i = -200; i <= 200; i += 17) {
            expect(this.obj.greaterThan(i, i)).to.be.false;
            expect(this.obj.greaterThan(i, i + 7 * context.multiplier)).to.be.false;
          }
        });

      });

    });

  });

});
