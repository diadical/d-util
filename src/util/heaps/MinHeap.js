import KeyValueHeap from './KeyValueHeap';
import KeyValuePairComparator from '../comparators/KeyValuePairComparator';

/**
 * Minimum heap.
 * @extends {KeyValueHeap}
 */
class MinHeap extends KeyValueHeap {
  constructor() {
    super(KeyValuePairComparator.ascending);
  }

  /**
   * Extracts the minimum item from the heap and returns its value.
   * @return {} The value of the minimum item on the heap.
   */
  extractMin() {
    return this.extractValue();
  }

  /**
   * Property to access the value of the minimum item on the heap.
   * @member {}
   * @readonly
   */
  peekMin() {
    return this.peekValue();
  }
}

export default MinHeap;
