import Comparator from './Comparator';

/**
 * Specialisation comparator class that handles KeyValuePair containers.
 * @extends Comparator
 */
class KeyValuePairComparator extends Comparator {
  /**
   * Compares the keys of two KeyValuePair objects.
   * @param  {KeyValuePair} value1 The first key to compare.
   * @param  {KeyValuePair} value2 The second key to compare.
   * @return {Number} 0 if the values are the same, -1 if value1 is less than value 2 and 1 if value1 is greater than value2.
   */
  compare(value1, value2) {
    return super.compare(value1.key, value2.key);
  }
}

export default KeyValuePairComparator;
