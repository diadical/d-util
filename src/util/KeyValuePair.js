
class KeyValuePair {
  constructor(key, value) {
    if (arguments.length < 2) {
      throw new Error('key and value arguments are mandatory.');
    }

    this.key = key;
    this.value = value;
  }
}

export default KeyValuePair;
