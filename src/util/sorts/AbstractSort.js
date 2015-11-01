import Comparator from '../comparators/Comparator';

class AbstractSort {
  static get ascending() {
    if (!this.hasOwnProperty('_instance')) {
      this._instance = new this(Comparator.ascending);
    }
    return this._instance;
  }

  static get descending() {
    if (!this.hasOwnProperty('_instance')) {
      this._instance = new this(Comparator.descending);
    }
    return this._instance;
  }

  constructor(comparator) {
    if (this.constructor === AbstractSort) {
      throw new TypeError('AbstractSort: cannot instantiate abstract class');
    }
    if (!(comparator instanceof Comparator)) {
      throw new TypeError('AbstractSort: comparator must be a Comparator or a subclass');
    }

    this._comparator = comparator;
  }

  get comparator() {
    return this._comparator;
  }

  sort() { // (comparator, array)
    // must be implemented in subclasses
    throw new Error('sort is not implemented!');
  }
}

export default AbstractSort;
