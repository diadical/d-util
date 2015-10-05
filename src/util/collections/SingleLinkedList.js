import SingleLinkedListNode from '../containers/SingleLinkedListNode';

/**
 * Low level class for a singly linked list data structure.
 */
class SingleLinkedList {
  /**
   * Default constructor takes no arguments.
   */
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  /**
   * Adds a value to the head of the linked list.
   * @param {} value Value to add.
   */
  addFirst(value) {
    let node = new SingleLinkedListNode(value);
    node.next = this._head;
    if (this._head) {
      this._head = node;
    }
    else {
      this._tail = this._head = node;
    }
    ++this._size;
  }

  /**
   * Adds a value to the tail of the linked list.
   * @param {} value Value to add.
   */
  addLast(value) {
    if (this._head) {
      let node = new SingleLinkedListNode(value);
      this._tail = this._tail.next = node;
      ++this._size;
    }
    else {
      this.addFirst(value);
    }
  }

  /**
   * Property to peek at the value at the head of the linked list.
   * @member {}
   */
  get first() {
    let value = undefined;
    if (this._head) {
      value = this._head.value;
    }
    return value;
  }

  /**
   * Removes the head value from the linked list and sets the head to the second node and returns the removed value.
   * @return {} Value that was at the head.
   */
  extractFirst() {
    let value = undefined;
    if (this._head) {
      value = this._head.value;
      this._head = this._head.next;
    }
    --this._size;
    return value;
  }

  /**
   * A readonly property to get the length of the linked list.
   * @member {Number}
   * @readonly
   */
  get size() {
    return this._size;
  }

  /**
   * Clears all items from the linked list and makes it empty.
   */
  clear() {
    this._head = this._tail = null;
    this._size = 0;
  }

  /**
   * Calls the passed in callback with each value/index pair in list.
   * @param  {Function} cb Callback to call for each item in list.
   * @example
   * llist.forEach((value, index) => {
   * 	// do something
   * })
   */
  forEach(cb) {
    let node = this._head,
      i = 0;
    while (node) {
      if (cb(node.value, i++) === true) {
        break;
      }
      node = node.next;
    }
  }
}

export default SingleLinkedList;
