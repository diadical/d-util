
class KeyValuePair {
  constructor(key, value) {
    if (arguments.length < 2) {
      throw new Error('key and value arguments are mandatory');
    }

    // private fields
    this._key = key;
    this._value = value;
  }

  get key() {
    return this._key;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }
}

export default KeyValuePair;
