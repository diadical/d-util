/**
 * Stack implementation backed by a dynamically sized array.
 *
 * Note that this implementation really shouldn't be used for anything, it is
 * just to demonstrate how an stack backed by an array would normally be built.
 * As JavaScript already has dynamic arrays which support both push and pop
 * methods it is much better to use the in-built Array type.
 */
class ArrayStack {
  /**
   * Default empty constructor.
   */
  constructor() {
    this._array = [];
    this._maxLength = 8;
    this._index = 0;
  }

  /**
   * Adds a new value onto the end of the stack.
   * @param {} value Value to add.
   */
  push(value) {
    this._array[this._index++] = value;
    if (this._index === this._maxLength) {
      this._growArray();
    }
  }

  /**
   * Removes the value at the end of the stack and returns it.
   * @return {} Value at the end of the stack.
   */
  pop() {
    let value = this._array[--this._index];
    this._array[this._index] = undefined;
    if (this._index <= this._maxLength / 4) {
      this._shrinkArray();
    }
    return value;
  }

  /**
   * A readonly property that returns the number of items in the stack.
   * @member {Number}
   * @readonly
   */
  get size() {
    return this._index;
  }

  /**
   * Clears all items from the stack and makes it empty.
   */
  clear() {
    this._array = [];
  }

  /**
   * Calls the passed in callback with each value/index pair in Stack.
   * @param  {Function} cb Callback to call for each item in Stack.
   * @example
   * stack.forEach((value, index) => {
   * 	// do something
   * })
   */
  forEach(cb) {
    for (let j = 0, i = this._index - 1; i >= 0 ; ++j, --i) {
      if (cb(this._array[i], j) === true) {
        break;
      }
    }
  }

  _copyArray() {
    let array = [];
    this._array.forEach(v => array.push(v));
    return array;
  }

  _growArray() {
    this._array = this._copyArray();
    this._maxLength *= 2;
  }

  _shrinkArray() {
    if (this._maxLength > 8) {
      this._array = this._copyArray();
      this._maxLength /= 2;
    }
  }

}

export default ArrayStack;
