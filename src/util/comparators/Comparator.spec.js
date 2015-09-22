import { expect } from 'chai';
import Comparator from './Comparator';

describe('Comparator class', function() {

  describe('instantiation', function() {

    it('can be instantiated with  no arguments', function() {
      let obj = new Comparator();

      expect(obj.compare).to.not.be.undefined;
      expect(obj.equals).to.not.be.undefined;
      expect(obj.lessThan).to.not.be.undefined;
      expect(obj.greaterThan).to.not.be.undefined;
    });

  });

  describe('.instance', function() {

    it('returns an instance of Comparator', function() {
      let obj = Comparator.instance;
      expect(obj).to.not.be.undefined;
      expect(obj instanceof Comparator).to.be.true;
    });

    it('always returns the same object', function() {
      for (let i = 0; i < 10; ++i) {
        expect(Comparator.instance).to.equal(Comparator.instance);
      }
    });

  });

  describe('.compare', function() {

    it('returns 0 when both numbers are the same', function() {
      for (let i = -200; i <= 200; i += 17) {
        expect(Comparator.instance.compare(i, i)).to.equal(0);
      }
    });

    it('returns -1 when first number is smaller than second', function() {
      for (let i = -200; i <= 200; i += 17) {
        expect(Comparator.instance.compare(i, i + 7)).to.equal(-1);
      }
    });

    it('returns 1 when first number is larger than second', function() {
      for (let i = -200; i <= 200; i += 17) {
        expect(Comparator.instance.compare(i, i - 7)).to.equal(1);
      }
    });

  });

  describe('.equals', function() {

    it('returns true when both numbers are the same', function() {
      for (let i = -200; i <= 200; i += 17) {
        expect(Comparator.instance.equals(i, i)).to.be.true;
      }
    });

    it('returns false when both numbers are not the same', function() {
      for (let i = -200; i <= 200; i += 17) {
        expect(Comparator.instance.equals(i, i - 7)).to.be.false;
        expect(Comparator.instance.equals(i, i + 7)).to.be.false;
      }
    });

  });

  describe('.lessThan', function() {

    it('returns true when first number is smaller than second', function() {
      for (let i = -200; i <= 200; i += 17) {
        expect(Comparator.instance.lessThan(i, i + 7)).to.be.true;
      }
    });

    it('returns false when first number is larger or equal to the second', function() {
      for (let i = -200; i <= 200; i += 17) {
        expect(Comparator.instance.lessThan(i, i)).to.be.false;
        expect(Comparator.instance.lessThan(i, i - 7)).to.be.false;
      }
    });

  });

  describe('.greaterThan', function() {

    it('returns true when first number is larger than second', function() {
      for (let i = -200; i <= 200; i += 17) {
        expect(Comparator.instance.greaterThan(i, i - 7)).to.be.true;
      }
    });

    it('returns false when first number is smaller or equal to the second', function() {
      for (let i = -200; i <= 200; i += 17) {
        expect(Comparator.instance.greaterThan(i, i)).to.be.false;
        expect(Comparator.instance.greaterThan(i, i + 7)).to.be.false;
      }
    });

  });

});
