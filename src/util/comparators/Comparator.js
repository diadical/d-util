/**
 * Generic Comparator class for comparing two values.
 */
class Comparator {
  /**
   * Static property to get a singleton instance of Comparator class in ascending order.
   * @member {Comparator}
   * @readonly
   */
  static get ascending() {
    if (!this.hasOwnProperty('_ascendingInstance')) {
      this._ascendingInstance = new this(false);
    }
    return this._ascendingInstance;
  }

  /**
  * Static property to get a singleton instance of Comparator class in descending order.
  * @member {Comparator}
  * @readonly
  */
  static get descending() {
    if (!this.hasOwnProperty('_descendingInstance')) {
      this._descendingInstance = new this(true);
    }
    return this._descendingInstance;
  }

  /**
   * @param {Boolean} [descendingOrder=false] - Order of comparisons. Descending order if true otherwise ascending order.
   */
  constructor(descendingOrder) {
    this._descendingOrder = !!descendingOrder;
  }

  /**
   * Returns whether or not comparisons are done in descending or ascending order.
   * @member {Boolean}
   * @readonly
   */
  get isDescendingOrder() {
    return this._descendingOrder;
  }

  /**
   * Compares two values and returns a comparison result.
   *
   * This default Comparator implementation simply uses JavaScripts inbuilt
   * less than (<) or greather than (>) to compare values, if neither then they
   * are considered to be the same. This comparison does not consider the types
   * of the two values passed in.
   *
   * What is considered 'less than' or 'greater than' depends on whether a
   * Comparator instance is configured to work in ascending or descending order.
   * @param  {} value1 The first value to compare.
   * @param  {} value2 The second value to compare.
   * @return {Number} 0 if the values are the same, -1 if value1 is less than value 2 and 1 if value1 is greater than value2.
   */
  compare(value1, value2) {
    if (value1 < value2) {
      return this._descendingOrder ? 1 : -1;
    }
    else if (value1 > value2) {
      return this._descendingOrder ? -1 : 1;
    }
    else {
      return 0;
    }
  }

  /**
   * Compares two values and returns true if value1 equals value2.
   * @param  {} value1 The first value to compare.
   * @param  {} value2 The second value to compare.
   * @return {Boolean} true if value1 equals value2, otherwise false.
   */
  equals(value1, value2) {
    return this.compare(value1, value2) === 0;
  }

  /**
   * Compares two values and returns true if value1 is less than value2.
   * @param  {} value1 The first value to compare.
   * @param  {} value2 The second value to compare.
   * @return {Boolean} true if value1 is less than value2, otherwise false.
   */
  lessThan(value1, value2) {
    return this.compare(value1, value2) === -1;
  }

  /**
   * Compares two values and returns true if value1 is greater than value2.
   * @param  {} value1 The first value to compare.
   * @param  {} value2 The second value to compare.
   * @return {Boolean} true if value1 is greater than value2, otherwise false.
   */
  greaterThan(value1, value2) {
    return this.compare(value1, value2) === 1;
  }

  /**
   * Creates a new comparator object that will compare in the reverse order of the
   * current one.
   *
   * @return {Comparator} New comparator object that compares in the reverse
   * of the current instance.
   */
  reverseOrder() {
    return new this.constructor(!this._descendingOrder);
  }
}

export default Comparator;
