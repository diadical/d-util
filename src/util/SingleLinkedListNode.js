
class SingleLinkedListNode {
  constructor(value) {
    if (arguments.length === 0) {
      throw new Error('value argument is mandatory');
    }

    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

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
