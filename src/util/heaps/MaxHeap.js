import KeyValueHeap from './KeyValueHeap';
import KeyValuePairComparator from '../comparators/KeyValuePairComparator';

/**
 * Maximum heap.
 * @extends {KeyValueHeap}
 */
class MaxHeap extends KeyValueHeap {
  constructor() {
    super(KeyValuePairComparator.descending);
  }

  /**
   * Extracts the minimum item from the heap and returns its value.
   * @return {} The value of the minimum item on the heap.
   */
  extractMax() {
    return this.extractValue();
  }

  /**
   * Property to access the value of the minimum item on the heap.
   * @member {}
   * @readonly
   */
  peekMax() {
    return this.peekValue();
  }
}

export default MaxHeap;
