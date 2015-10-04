import SingleLinkedList from './SingleLinkedList';

/**
 * Stack implementation using linked list data structure.
 */
class LinkedListStack {
  /**
   * Default constructor takes no arguments.
   */
  constructor() {
    this._list = new SingleLinkedList();
  }

  /**
   * Adds a new value onto the end of the stack.
   * @param {} value Value to add.
   */
  push(value) {
    this._list.addFirst(value);
  }

  /**
   * Removes the value at the end of the stack and returns it.
   * @return {} Value at the end of the stack.
   */
  pop() {
    return this._list.extractFirst();
  }

  /**
   * A readonly property that returns the number of items in the stack.
   * @member {Number}
   * @readonly
   */
  get size() {
    return this._list.size;
  }

  /**
   * Clears all items from the stack and makes it empty.
   */
  clear() {
    this._list.clear();
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
    let node = this._list.first,
      i = 0;
    while (node) {
      if (cb(node.value, i++) === true) {
        break;
      }
      node = node.next;
    }
  }
}

export default LinkedListStack;
