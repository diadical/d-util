import Comparator from '../comparators/Comparator';

/**
 * Basic heap data type backed by a dynamic array.
 */
class Heap {
  /**
   * @param {Comparator} comparator Comparator type to use for comparing items.
   * Must be Comparator of subclass of Comparator.
   */
  constructor(comparator) {
    if (arguments.length === 0) {
      throw new Error('Heap: comparator is mandatory');
    }
    if (!(comparator instanceof Comparator)) {
      throw new Error('Heap: comparator must either be an instance of comparators.Comparator or extend it');
    }

    this._array = [];
    this._comparator = comparator;
  }

  /**
   * Insert a new item into the heap. Returns the same heap instance so that
   * insert calls can be chained together.
   * @param {} item Item to insert into heap.
   * @return {Heap} Current instance of Heap.
   */
  insert(item) {
    this._array.push(item);
    this._siftUp(this._array.length - 1);
    return this;
  }

  /**
   * Iterates through the items on the heap and calls the callback function.
   * If the callback function returns a truthy value then that Item is deleted
   * and the heap is reordered.
   * @param {Function} cb Callback function will be called with (value, index)
   * parameters, if a truthy value is returned then the item will be deleted.
   */
  delete(cb) {
    this._array.forEach((v, i) => {
      if (cb(v, i)) {
        if (i < this._array.length - 1) {
          this._array[i] = this._array.pop();
          this._siftUp(i);
          this._siftDown(i);
        }
        else {
          this._array.pop(); // last item, just remove it
        }
      }
    });
  }

  /**
   * Extract the 'top' item from the heap.
   * @return {} Item at the 'top' of the heap.
   */
  extract() {
    let item = this._array[0];
    if (this._array.length > 1) {
      this._array[0] = this._array.pop();
      this._siftDown(0);
    }
    else {
      this._array.pop();
    }
    return item;
  }

  /**
   * Property that accesses the Item at the 'top' of the heap.
   * @member {}
   * @readonly
   */
  get peek() {
    return this._array[0];
  }

  /**
  * A readonly property that returns the number of items in the heap.
   * @member {Number}
   * @readonly
   */
  get size() {
    return this._array.length;
  }

  /**
   * Returns a string representation of the heap.
   * @return {String} String representation of the heap.
   */
  toString() {
    return 'Heap(' + JSON.stringify(this._array) + ')';
  }

  _swap(idxa, idxb) {
    let temp = this._array[idxa];
    this._array[idxa] = this._array[idxb];
    this._array[idxb] = temp;
  }

  _getParent(idx) {
    return idx > 0 ? Math.floor((idx - 1)/ 2) : null;
  }

  _getLeftChild(idx) {
    let i = 2 * idx + 1;
    return i < this._array.length ? i : null;
  }

  _getRightChild(idx) {
    let i = 2 * idx + 2;
    return i < this._array.length ? i : null;
  }

  // Moves an element towards the root
  _siftUp(idx) {
    let parent = this._getParent(idx);
    if (parent !== null && this._comparator.compare(this._array[idx], this._array[parent]) < 0) {
      this._swap(idx, parent);
      this._siftUp(parent);
    }
  }

  // Moves an element towards the leaves
  _siftDown(idx) {
    let idxL = this._getLeftChild(idx),
      idxR = this._getRightChild(idx),
      idxBigger = null;
    if (idxL !== null && idxR !== null) {
      idxBigger = idxL;

      if (this._comparator.compare(this._array[idxR], this._array[idxL]) < 0) {
        idxBigger = idxR;
      }
    }
    else if (idxL !== null) {
      idxBigger = idxL;
    }

    if (idxBigger !== null) {
      if (this._comparator.compare(this._array[idxBigger], this._array[idx]) < 0) {
        this._swap(idx, idxBigger);
        this._siftDown(idxBigger);
      }
    }
  }
}

export default Heap;
