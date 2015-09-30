/**
 * A singly linked list node implementation.
 */
class SingleLinkedListNode {
  /**
   * @param {} value The value of the node.
   */
  constructor(value) {
    if (arguments.length === 0) {
      throw new Error('value argument is mandatory');
    }

    this._value = value;
    this._next = null;
  }

  /**
   * Property to get value.
   * @member {}
   * @readonly
   */
  get value() {
    return this._value;
  }

  /**
   * Property to get or set the next node.
   * @member {SingleLinkedListNode}
   */
  get next() {
    return this._next;
  }

  set next(node) {
    if (node === null || node instanceof SingleLinkedListNode) {
      this._next = node;
    }
    else {
      throw new TypeError('next node must be a SingleLinkedListNode or null');
    }
  }
}

export default SingleLinkedListNode;
