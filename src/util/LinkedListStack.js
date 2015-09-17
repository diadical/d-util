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
   * @param value Value to add.
   */
  push(value) {
    this._list.addFirst(value);
  }

  /**
   * Removes the value at the end of the stack and returns it.
   * @return Value at the end of the stack.
   */
  pop() {
    return this._list.extractFirst();
  }

  /**
   * A readonly property that returns the number of items in the stack.
   * @return {number} Number of items in the stack.
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
}

export default LinkedListStack;
