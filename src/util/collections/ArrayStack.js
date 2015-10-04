/**
 * Stack implementation backed by a dynamically sized array.
 */
class ArrayStack {
  /**
   * Default empty constructor.
   */
  constructor() {
    this._array = [];
  }

  /**
   * Adds a new value onto the end of the stack.
   * @param {} value Value to add.
   */
  push(value) {
    // this is kind of cheating but it is faster than using array indexing
    // look into performance in greater detail later
    this._array.push(value);
  }

  /**
   * Removes the value at the end of the stack and returns it.
   * @return {} Value at the end of the stack.
   */
  pop() {
    // this is kind of cheating but it is faster than using array indexing
    // look into performance in greater detail later
    return this._array.pop();
  }

  /**
   * A readonly property that returns the number of items in the stack.
   * @member {Number}
   * @readonly
   */
  get size() {
    return this._array.length;
  }

  clear() {
    this._array = [];
  }
}

export default ArrayStack;
