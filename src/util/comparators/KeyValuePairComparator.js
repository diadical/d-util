import Comparator from './Comparator';

class KeyValuePairComparator extends Comparator {
  static get instance() {
    let obj = KeyValuePairComparator.prototype._instance;
    if (!obj) {
      obj = new KeyValuePairComparator();
      KeyValuePairComparator.prototype._instance = obj;
    }
    return obj;
  }

  compare(v1, v2) {
    return super.compare(v1.key, v2.key);
  }
}

export default KeyValuePairComparator;
