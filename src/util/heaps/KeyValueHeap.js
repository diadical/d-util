import Heap from './Heap';
import KeyValuePair from '../containers/KeyValuePair';
import KeyValuePairComparator from '../comparators/KeyValuePairComparator';

/**
 * A heap that has KeyValuePair items. Items are sorted by key.
 */
class KeyValueHeap {
  /**
   * @param {KeyValuePairComparator} comparator Comparator type to use for
   * comparing items. Must be Comparator of subclass of Comparator.
   */
  constructor(comparator) {
    if (arguments.length === 0) {
      throw new Error('KeyValueHeap: comparator is mandatory');
    }
    if (!(comparator instanceof KeyValuePairComparator)) {
      throw new Error('KeyValueHeap: comparator must be instance of KeyValuePairComparator');
    }
    this._heap = new Heap(comparator);
  }

  /**
   * Inserts a new key/value pair onto the heap.
   * @param {} key The key for the item that will be added to the heap. The key is used to maintain heap order.
   * @param {} value The value for the item that will be added to the heap.
   */
  insert(key, value) {
    if (arguments.length < 1) {
      throw new Error('KeyValueHeap: a KeyValuePair object or both key and value are required for insert');
    }
    else if (arguments.length === 1) {
      if (key instanceof KeyValuePair) {
        this._heap.insert(key);
      }
      else {
        throw new Error('KeyValueHeap: single argument must be instance of KeyValuePair');
      }
    }
    else {
      let item = new KeyValuePair(key, value);
      this._heap.insert(item);
    }
    return this;
  }

  /**
   * Iterates through the items on the heap and calls the callback function.
   * If the callback function returns a truthy value then that Item is deleted
   * and the heap is reordered.
   * @param {Function} cb Callback function will be called with (key, value, index)
   * parameters, if a truthy value is returned then the item will be deleted.
   */
  delete(cb) {
    this._heap.delete((v, i) => cb(v.key, v.value, i));
  }

  /**
   * Extracts the 'top' item from the heap and returns it.
   * @return {KeyValuePair} The 'top' item on the heap.
   */
  extract() {
    return this._heap.extract();
  }

  /**
   * Extracts the 'top' item from the heap and returns its value.
   * @return {} The value of the 'top' item on the heap.
   */
  extractValue() {
    return this._heap.extract().value;
  }

  /**
   * Property to access the 'top' item on the heap.
   * @member {KeyValuePair}
   * @readonly
   */
  get peek() {
    return this._heap.peek;
  }

  /**
   * Property to access the value of the 'top' item on the heap.
   * @member {}
   * @readonly
   */
  get peekValue() {
    return this._heap.peek.value;
  }

  /**
  * A readonly property that returns the number of items in the heap.
   * @member {Number}
   * @readonly
   */
  get size() {
    return this._heap.size;
  }

  /**
   * Returns a string representation of the heap.
   * @return {String} String representation of the heap.
   */
  toString() {
    return this._heap.toString();
  }
}

export default KeyValueHeap;
