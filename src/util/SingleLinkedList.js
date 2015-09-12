import SingleLinkedListNode from './SingleLinkedListNode';

class SingleLinkedList {
  constructor() {
    this._root = null;
    this._tail = null;
    this._size = 0;
  }

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

  get first() {
    let value = undefined;
    if (this._root) {
      value = this._root.value;
    }
    return value;
  }

  extractFirst() {
    let value = undefined;
    if (this._root) {
      value = this._root.value;
      this._root = this._root.next;
    }
    --this._size;
    return value;
  }

  get size() {
    return this._size;
  }

  clear() {
    this._root = null;
    this._tail = null;
    this._size = 0;
  }
}

export default SingleLinkedList;
