import SingleLinkedListNode from '../containers/SingleLinkedListNode';

/**
 * Low level class for a singly linked list data structure.
 */
class SingleLinkedList {
  /**
   * Default constructor takes no arguments.
   */
  constructor() {
    this._root = null;
    this._tail = null;
    this._size = 0;
  }

  /**
   * Adds a value to the head of the linked list.
   * @param value Value to add.
   */
  addFirst(value) {
    let node = new SingleLinkedListNode(value);
    node.next = this._root;
    if (this._root) {
      this._root = node;
    }
    else {
      this._tail = this._root = node;
    }
    ++this._size;
  }

  /**
   * Adds a value to the tail of the linked list.
   * @param value Value to add.
   */
  addLast(value) {
    if (this._root) {
      let node = new SingleLinkedListNode(value);
      this._tail.next = node;
      this._tail = node;
      ++this._size;
    }
    else {
      this.addFirst(value);
    }
  }

  /**
   * Property to peek at the value at the head of the linked list.
   * @return Value at the head.
   */
  get first() {
    let value = undefined;
    if (this._root) {
      value = this._root.value;
    }
    return value;
  }

  /**
   * Removes the head value from the linked list and sets the head to the second node and returns the removed value.
   * @return Value that was at the head.
   */
  extractFirst() {
    let value = undefined;
    if (this._root) {
      value = this._root.value;
      this._root = this._root.next;
    }
    --this._size;
    return value;
  }

  /**
   * Property to get the length of the linked list.
   * @return {number} Length of the linked list.
   */
  get size() {
    return this._size;
  }

  /**
   * Clears all items from the linked list and makes it empty.
   */
  clear() {
    this._root = null;
    this._tail = null;
    this._size = 0;
  }
}

export default SingleLinkedList;
