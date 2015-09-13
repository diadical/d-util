import { expect } from 'chai';
import SingleLinkedList from '../../../src/util/SingleLinkedList';

describe('SingleLinkedList class', function() {

  describe('instantiation', function() {

    it('works with no arguments', function() {
      let list = new SingleLinkedList();
      expect(list.first).to.be.undefined;
    });

  });

  describe('property constraints', function() {

    beforeEach(function() {
      this.obj = new SingleLinkedList();
    });

    it('cannot set .first', function() {
      expect(() => this.obj.first = null).to.throw(TypeError);
    });

    it('cannot set .size', function() {
      expect(() => this.obj.size = null).to.throw(TypeError);
    });

  });

  describe('functionality', function() {

    beforeEach(function() {
      this.obj = new SingleLinkedList();
    });

    describe('adding', function() {

      it('can add item to front', function() {
        let value = 'val1';
        this.obj.addFirst(value);

        expect(this.obj.first).to.equal(value);
        expect(this.obj.size).to.equal(1);
      });

      it('can add items to front', function() {
        for (let i = 1; i <= 10; ++i) {
          this.obj.addFirst(i);
          expect(this.obj.first).to.equal(i);
          expect(this.obj.size).to.equal(i);
        }
      });

      it('can add item to back', function() {
        let value = 'val1';
        this.obj.addLast(value);

        expect(this.obj.first).to.equal(value);
        expect(this.obj.size).to.equal(1);
      });

      it('can add items to back', function() {
        for (let i = 1; i <= 10; ++i) {
          this.obj.addLast(i);
          expect(this.obj.first).to.equal(1);
          expect(this.obj.size).to.equal(i);
        }
      });

    });

    describe('extracting', function() {

      it('can extract first in order after add first', function() {
        let i;

        for (i = 1; i <= 10; ++i) {
          this.obj.addFirst(i);
        }

        for (i = 10; i > 0; --i) {
          expect(this.obj.extractFirst()).to.equal(i);
          expect(this.obj.size).to.equal(i - 1);
        }
      });

      it('can extract first in order after add last', function() {
        let i;

        for (i = 1; i <= 10; ++i) {
          this.obj.addLast(i);
        }

        for (i = 1; i <= 10; ++i) {
          expect(this.obj.extractFirst()).to.equal(i);
          expect(this.obj.size).to.equal(10 - i);
        }
      });

    });

    it('can add items to front and back and extract first in order', function() {
      let i;

      for (i = 1; i <= 10; ++i) {
        this.obj.addFirst('first' + i);
        this.obj.addLast('last' + i);
      }

      for (i = 10; i > 0; --i) {
        expect(this.obj.extractFirst()).to.equal('first' + i);
        expect(this.obj.size).to.equal(10 + i - 1);
      }
      for (i = 1; i <= 10; ++i) {
        expect(this.obj.extractFirst()).to.equal('last' + i);
        expect(this.obj.size).to.equal(10 - i);
      }
    });

  });

  describe('performance', function() {

    it('add first and extract 10000 items', function() {
      let list = new SingleLinkedList(),
        i;

      for (i = 1; i <= 10000; ++i) {
        list.addFirst(i);
      }

      for (i = 10000; i > 0; --i) {
        expect(list.extractFirst()).to.equal(i);
      }
    });

  });

});
