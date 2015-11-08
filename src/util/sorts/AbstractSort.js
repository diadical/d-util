import Comparator from '../comparators/Comparator';

/**
 * Abstract sorting class that contains utility methods and singleton instanceof
 * method implementations. Cannot be instantiated by itself.
 */
class AbstractSort {
  /**
   * Returns a singleton instance of a sorting subclass that has been supplied
   * Comparator in ascending sort order. Should only be called on subclasses
   * of this AbstractSort class.
   *
   * @member {AbstractSort}
   * @readonly
   */
  static get ascending() {
    if (!this.hasOwnProperty('_ascending')) {
      this._ascending = new this(Comparator.ascending);
    }
    return this._ascending;
  }

  /**
   * Returns a singleton instance of a sorting subclass that has been supplied
   * Comparator in descending sort order. Should only be called on subclasses
   * of this AbstractSort class.
   *
   * @member {AbstractSort}
   * @readonly
   */
  static get descending() {
    if (!this.hasOwnProperty('_descending')) {
      this._descending = new this(Comparator.descending);
    }
    return this._descending;
  }

  /**
   * Constructor for AbstractSort cannot be invoked directly, should only be
   * called by a subclass via super() in a subclass constructor.
   *
   * @param  {Comparator} comparator The Comparator object to compare values with
   */
  constructor(comparator) {
    if (this.constructor === AbstractSort) {
      throw new TypeError('AbstractSort: cannot instantiate abstract class');
    }
    if (!(comparator instanceof Comparator)) {
      throw new TypeError('AbstractSort: comparator must be a Comparator or a subclass');
    }

    this._comparator = comparator;
  }

  /**
   * Returns the comparator object that this Sort object was created with.
   *
   * @member {Comparator}
   * @readonly
   */
  get comparator() {
    return this._comparator;
  }

  /**
   * Abstract method that runs the sort routine. This method itself cannot be
   * called and will simply throw an error. It is expected to be overloaded
   * by any implementing subclass.
   *
   * @throws {Error} Will always throw an Error
   */
  sort() { // (comparator, array)
    // must be implemented in subclasses
    throw new Error('sort is not implemented!');
  }

  // Utility methods common to many sort routines
  _swap(list, x, y) {
    if (x !== y) {
      let temp = list[x];
      list[x] = list[y];
      list[y] = temp;
    }
  }
}

export default AbstractSort;
