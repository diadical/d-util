/* eslint-env mocha */

import { expect } from 'chai';
import KeyValuePair from '../containers/KeyValuePair';
import KeyValuePairComparator from '../comparators/KeyValuePairComparator';

export default {
  KeyValue: {
    functionalityTests(Ctor, comparisonProperty) {
      let comparator = KeyValuePairComparator[comparisonProperty];

      describe('with comparator ' + comparisonProperty, function() {

        beforeEach(function() {
          this.obj = new Ctor(comparator);
        });

        it('can chain together insertions', function() {
          var values = [10, 20, 30, 50, 40].map(v => new KeyValuePair(v, 'value' + v));
          expect(() => this.obj.insert(values[0].key, values[0].value)
            .insert(values[1].key, values[1].value)
            .insert(values[2].key, values[2].value)
            .insert(values[3].key, values[3].value)
            .insert(values[4].key, values[4].value)).to.not.throw(Error);
          values.sort((a, b) => comparator.compare(a, b));
          values.forEach(kv => expect(this.obj.extractValue()).to.equal(kv.value));
        });

        it('peek returns the same pair that will be returned from extract next', function() {
          let values = [15, 30, 45, 60].map(v => new KeyValuePair(v, 'value' + v));
          values.forEach(kv => this.obj.insert(kv.key, kv.value));
          values.sort((a, b) => comparator.compare(a, b));
          values.forEach(kv => {
            expect(this.obj.peek.key).to.equal(kv.key);
            expect(this.obj.peekValue).to.equal(kv.value);
            let ev = this.obj.extract();
            expect(ev.key).to.equal(kv.key);
            expect(ev.value).to.equal(kv.value);
          });
        });

        it('size correctly reflects number of items in heap', function() {
          let values = [1, 3, 2, 6, 4, 5, 9, 7, 8].map(v => new KeyValuePair(v, 'value' + v)),
            size = 0;
          values.forEach(kv => {
            this.obj.insert(kv.key, kv.value);
            expect(this.obj.size).to.equal(++size);
          });
          values.sort((a, b) => comparator.compare(a, b));
          values.forEach(kv => {
            expect(this.obj.extractValue()).to.equal(kv.value);
            expect(this.obj.size).to.equal(--size);
          });
        });

        it('can delete an item and heap size changes accordingly', function() {

          this.obj.insert(1, 'value1').insert(2, 'value2').insert(3, 'value3');
          expect(this.obj.size).to.equal(3);
          this.obj.delete(k => k === 3);
          expect(this.obj.size).to.equal(2);

          let values = [1, 2].map(v => new KeyValuePair(v, 'value' + v));
          values.sort((a, b) => comparator.compare(a, b));
          values.forEach(kv => expect(this.obj.extractValue()).to.equal(kv.value));

        });

        it('random tests', function() {
          let values = [],
            x, v, kv;

          for (x = 0; x <= 100000; x += 10) {
            v = Math.floor(Math.random() * 1000000);
            kv = new KeyValuePair(v, 'value' + v);
            values.push(kv);
            this.obj.insert(kv.key, kv.value);
            expect(this.obj.size).to.equal(values.length);
          }

          values.sort((a, b) => comparator.compare(a, b));

          x = 0;
          while (this.obj.size) {
            let ev = this.obj.extract();
            expect(ev.key).to.equal(values[x].key);
            expect(ev.value).to.equal(values[x++].value);
            expect(this.obj.size).to.equal(values.length - x);
          }
        });

      });

    }
  }
};
