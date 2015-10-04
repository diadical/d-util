import SingleLinkedList from './SingleLinkedList';

/**
 * Queue implementation using linked list data structure.
 */
class LinkedListQueue {
  /**
   * Default constructor takes no arguments.
   */
  constructor() {
    this._list = new SingleLinkedList();
  }

  /**
   * Adds a value to the end of the queue.
   * @param  {} value Value to add.
   */
  enqueue(value) {
    this._list.addLast(value);
  }

  /**
   * Removes a value from the front of the queue and returns it.
   * @return {} Value at the front of the queue.
   */
  dequeue() {
    return this._list.extractFirst();
  }

  /**
  * A readonly property that returns the number of items in the queue.
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
   * Calls the passed in callback with each value/index pair in Queue.
   * @param  {Function} cb Callback to call for each item in Queue.
   * @example
   * queue.forEach((value, index) => {
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

export default LinkedListQueue;
