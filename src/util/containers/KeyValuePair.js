/**
 * Container that holds a key and associated value. Key and value can be any type
 * and key cannot be updated after construction.
 */
class KeyValuePair {
  /**
   * @param {} key The key that identifies the value.
   * @param {} value The value associated with the key.
   */
  constructor(key, value) {
    if (arguments.length < 2) {
      throw new Error('key and value arguments are mandatory');
    }
    this._key = key;
    this._value = value;
  }

  /**
   * Property to get the key.
   * @member {}
   * @readonly
   */
  get key() {
    return this._key;
  }

  /**
   * Property to get or set the value.
   * @member {}
   */
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }
}

export default KeyValuePair;
