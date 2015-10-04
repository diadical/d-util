/**
 * Queue implementation with a dynamically sized array.
 */
class ArrayQueue {
  /**
   * Default constructor takes no arguments.
   */
  constructor() {
    this._array = [];
    this._maxLength = 8;
    this._start = this._end = 0;
  }

  /**
   * Adds a value to the end of the queue.
   * @param  {} value Value to add.
   */
  enqueue(value) {
    this._array[this._end] = value;
    this._end = (this._end + 1) % this._maxLength;
    if (this._start === this._end) {
      this._growArray();
    }
  }

  /**
   * Removes a value from the front of the queue and returns it.
   * @return {} Value at the front of the queue.
   */
  dequeue() {
    let value = this._array[this._start];
    if (this._start !== this._end) {
      this._array[this._start] = undefined;
      this._start = (this._start + 1) % this._maxLength;
      if (this.size <= this._maxLength / 4) {
        this._shrinkArray();
      }
    }
    return value;
  }

  /**
  * A readonly property that returns the number of items in the queue.
  * @member {Number}
  * @readonly
   */
  get size() {
    if (this._end > this._start) {
      return this._end - this._start;
    }
    else {
      return this._end + this._maxLength - this._start;
    }
  }

  /**
   * Clears all items from the stack and makes it empty.
   */
  clear() {
    this._array = [];
    this.maxLength = 8;
    this._start = this._end;
  }

  /**
   * Calls the passed in callback with each value/index pair in Queue.
   * @param  {Function} cb Callback to call for each item in Queue.
   * @example
   * queue.forEach((value, index) => {
   * 	// do something
   * })
   */
  forEach(cb) {
    let i = this._start;
    do {
      // stop looping if we get the exact boolean value true
      if (cb(this._array[i], i) === true) {
        break;
      }
      i = (i + 1) % this._maxLength;
    } while (i !== this._start);
  }

  _copyArray() {
    let array = [];
    this.forEach(v => array.push(v));
    return array;
  }

  _growArray() {
    this._array = this._copyArray();
    this._maxLength *= 2;
    this._start = 0;
    this._end = this._array.length;
  }

  _shrinkArray() {
    this._array = this._copyArray();
    this._maxLength /= 2;
    this._start = 0;
    this._end = this._array.length;
  }

}

export default ArrayQueue;
