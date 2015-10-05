/* eslint-env mocha */

import { expect } from 'chai';
import util from './util';

describe('util "namespace"', function() {

  describe('contains types', function() {

    [
      'ArrayQueue',
      'ArrayStack',
      'LinkedListQueue',
      'LinkedListStack'
    ].forEach(prop => {

      it('#' + prop, function() {
        expect(util[prop]).to.exist;
      });

    });

  });

});
