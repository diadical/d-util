/**
 * Queue implementation with a dynamically sized array.
 */
class ArrayQueue {
  constructor() {
    this._array = [];
    this._maxLength = 8;
    this._start = this._end = 0;
  }

  _growArray() {
    let array = [],
      i = this._start,
      j = 0;

    do {
      array[j++] = this._array[i];
      i = (i + 1) % this._maxLength;
    } while (i !== this._start);

    this._maxLength *= 2;
    this._start = 0;
    this._end = j;
    this._array = array;
  }

  enqueue(value) {
    this._array[this._end] = value;
    this._end = (this._end + 1) % this._maxLength;
    if (this._start === this._end) {
      this._growArray();
    }
  }

  dequeue() {
    let value = this._array[this._start];
    if (this._start !== this._end) {
      this._array[this._start] = undefined;
      this._start = (this._start + 1) % this._maxLength;
    }
    return value;
  }

  get size() {
    if (this._end > this._start) {
      return this._end - this._start;
    }
    else {
      return this._end + this._maxLength - this._start;
    }
  }

  clear() {
    this._array = [];
    this.maxLength = 8;
    this._start = this._end;
  }
}

/*
let q = new ArrayQueue();
q.enqueue(1);
console.log(`size: ${q.size}`);
q.enqueue(2);
console.log(`size: ${q.size}`);
q.enqueue(3);
console.log(`size: ${q.size}`);
q.enqueue(4);
console.log(`size: ${q.size}`);
console.log(q.dequeue());
console.log(`size: ${q.size}`);
console.log(q.dequeue());
console.log(`size: ${q.size}`);
q.enqueue(5);
console.log(`size: ${q.size}`);
q.enqueue(6);
console.log(`size: ${q.size}`);
console.log(q.dequeue());
console.log(`size: ${q.size}`);
console.log(q.dequeue());
console.log(`size: ${q.size}`);
q.enqueue(7);
console.log(`size: ${q.size}`);
q.enqueue(8);
console.log(`size: ${q.size}`);
console.log(q.dequeue());
console.log(`size: ${q.size}`);
console.log(q.dequeue());
console.log(`size: ${q.size}`);
console.log(q.dequeue());
console.log(`size: ${q.size}`);
console.log(q.dequeue());
console.log(`size: ${q.size}`);
*/

export default ArrayQueue;
