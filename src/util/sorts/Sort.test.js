/* eslint-env mocha */

import { expect } from 'chai';

export default {

  functionality(Sort) {

    describe('functionality', function() {

      [
        'ascending',
        'descending'
      ].forEach(prop => {
        let sorter = Sort[prop],
          comparator = sorter.comparator;

        describe(prop, function() {

          it('sorts undefined/null list', function() {
            expect(sorter.sort(undefined)).to.be.undefined;
            expect(sorter.sort(null)).to.be.null;
          });

          it('sorts empty list', function() {
            expect(sorter.sort([])).to.eql([]);
          });

          it('sorts single element list', function() {
            expect(sorter.sort([4])).to.eql([4]);
          });

          it('sorts small lists', function() {
            let list, expected;
            list = [2, 4, 6, 8, 10, 9, 7, 5, 3, 1];
            expected = list.slice(0);
            sorter.sort(list);
            expected.sort((a, b) => comparator.compare(a, b));
            expect(list).to.eql(expected);
          });

          it('sorts list already in ascending order', function() {
            let list = [],
              expected;
            for (let i = 1000; i <= 2000; ++i) {
              list.push(i);
            }
            expected = list.slice(0);
            sorter.sort(list);
            expected.sort((a, b) => comparator.compare(a, b));
            expect(list).to.eql(expected);
          });

          it('sorts list already in desscending order', function() {
            let list = [],
              expected;
            for (let i = 2000; i >= 1000; --i) {
              list.push(i);
            }
            expected = list.slice(0);
            sorter.sort(list);
            expected.sort((a, b) => comparator.compare(a, b));
            expect(list).to.eql(expected);
          });

        });

      });

    });

  },

  randomised(Sort, doLargeTests) {

    describe('randomised tests', function() {

      [
        'ascending',
        'descending'
      ].forEach(prop => {
        let sorter = Sort[prop],
          comparator = sorter.comparator;

        it('correctly sorts randomised list with many duplicates', function() {
          let list = [],
            expected;
          for (let i = 0; i < 10000; ++i) {
            // add values between 1 and 100.
            list.push(Math.floor(Math.random() * 100) + 1);
          }
          expected = list.slice(0);
          sorter.sort(list);
          expected.sort((a, b) => comparator.compare(a, b));
          expect(list).to.eql(expected);
        });

        var lengths = [
          1 << 8,
          1 << 10,
          1 << 12,
          1 << 14
        ];
        if (doLargeTests) {
          lengths.push(1 << 16);
        }
        lengths.forEach(len => {

          it(`correctly sorts a random list of length ${len}`, function() {
            // extend test timeout as some sorts take a while
            this.timeout(10000);

            let list = [],
              expected;
            for (let i = 0; i < len; ++i) {
              list.push(Math.floor(Math.random() * 99999999));
            }
            expected = list.slice(0);
            sorter.sort(list);
            expected.sort((a, b) => comparator.compare(a, b));
            expect(list).to.eql(expected);
          });

        });

      });

    });

  }
};
