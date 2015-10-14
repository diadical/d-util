/* eslint-env mocha */

import { expect } from 'chai';
import Heap from './Heap';
import Comparator from '../comparators/Comparator';

describe('Heap class', function() {

  describe('instantiation', function() {

    it('fails with no arguments', function() {
      expect(() => new Heap()).to.throw('Heap: comparator is mandatory');
    });

    it('fails when comparator is not an instance of Comparator', function() {
      expect(() => new Heap({})).to.throw('Heap: comparator must either be an instance of comparators.Comparator or extend it');
    });

    it('works when valid comparator is passed in', function() {
      expect(() => new Heap(Comparator.ascending)).to.not.throw(Error);
      expect(() => new Heap(Comparator.descending)).to.not.throw(Error);
    });

    it('works when sub class of Comparator is passed in', function() {
      class SubComparator extends Comparator {}

      expect(() => new Heap(new SubComparator())).to.not.throw(Error);
    });

  });

  describe('functionality', function()  {

    [
      'ascending',
      'descending'
    ].forEach(comparisonProperty => {
      let comparator = Comparator[comparisonProperty];

      describe('with comparator ' + comparisonProperty, function() {

        beforeEach(function() {
          this.obj = new Heap(comparator);
        });

        it('can chain together insertions', function() {
          var values = [10, 20, 30, 50, 40];
          expect(() => this.obj.insert(values[0]).insert(values[1]).insert(values[2])
            .insert(values[3]).insert(values[4])).to.not.throw(Error);
          values.sort((a, b) => comparator.compare(a, b));
          values.forEach(v => expect(this.obj.extract()).to.equal(v));
        });

        it('peek returns the same value that will be returned from extract next', function() {
          let values = [15, 30, 45, 60];
          values.forEach(v => this.obj.insert(v));
          values.sort((a, b) => comparator.compare(a, b));
          values.forEach(v => {
            expect(this.obj.peek).to.equal(v);
            expect(this.obj.extract()).to.equal(v);
          });
        });

        it('size correctly reflects number of items in heap', function() {
          let values = [1, 3, 2, 6, 4, 5, 9, 7, 8],
            size = 0;
          values.forEach(v => {
            this.obj.insert(v);
            expect(this.obj.size).to.equal(++size);
          });
          values.sort((a, b) => comparator.compare(a, b));
          values.forEach(v => {
            expect(this.obj.extract()).to.equal(v);
            expect(this.obj.size).to.equal(--size);
          });
        });

        it('can delete an item and heap size changes accordingly', function() {

          this.obj.insert(1).insert(2).insert(3);
          expect(this.obj.size).to.equal(3);
          this.obj.delete(v => v === 3);
          expect(this.obj.size).to.equal(2);

          let values = [1, 2];
          values.sort((a, b) => comparator.compare(a, b));
          values.forEach(v => expect(this.obj.extract()).to.equal(v));
        });

        it('random tests', function() {
          let values = [],
            x, v;

          for (x = 0; x <= 100000; x += 10) {
            v = Math.floor(Math.random() * 1000000);
            values.push(v);
            this.obj.insert(v);
            expect(this.obj.size).to.equal(values.length);
          }

          values.sort((a, b) => comparator.compare(a, b));

          x = 0;
          while (this.obj.size) {
            expect(this.obj.extract()).to.equal(values[x++]);
            expect(this.obj.size).to.equal(values.length - x);
          }
        });

      });

    });

  });

});
