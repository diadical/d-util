import SingleLinkedList from './SingleLinkedList';

class LinkedListStack {
  constructor() {
    this._list = new SingleLinkedList();
  }

  push(value) {
    this._list.addFirst(value);
  }

  pop() {
    return this._list.extractFirst();
  }

  get size() {
    return this._list.size;
  }

  clear() {
    this._list.clear();
  }
}

export default LinkedListStack;
