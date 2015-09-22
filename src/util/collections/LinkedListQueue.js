import SingleLinkedList from './SingleLinkedList';

class LinkedListQueue {
  constructor() {
    this._list = new SingleLinkedList();
  }

  enqueue(value) {
    this._list.addLast(value);
  }

  dequeue() {
    return this._list.extractFirst();
  }

  get size() {
    return this._list.size;
  }

  clear() {
    this._list.clear();
  }
}

export default LinkedListQueue;
