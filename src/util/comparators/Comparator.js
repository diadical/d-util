
class Comparator {
  static get instance() {
    let obj = Comparator.prototype._instance;
    if (!obj) {
      obj = new Comparator();
      Comparator.prototype._instance = obj;
    }
    return obj;
  }

  compare(v1, v2) {
    if (v1 < v2) {
      return -1;
    }
    else if (v1 > v2) {
      return 1;
    }
    else {
      return 0;
    }
  }

  equals(v1, v2) {
    return this.compare(v1, v2) === 0;
  }

  lessThan(v1, v2) {
    return this.compare(v1, v2) === -1;
  }

  greaterThan(v1, v2) {
    return this.compare(v1, v2) === 1;
  }
}

export default Comparator;
