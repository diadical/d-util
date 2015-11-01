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

          it('sorts large random lists', function() {
            let list, expected, i;

            list = [];
            for (i = 0; i < 20000; ++i) {
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
