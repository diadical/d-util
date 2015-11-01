import AbstractSort from './AbstractSort';

class InsertionSort extends AbstractSort {
  constructor(comparator) {
    super(comparator);
  }

  sort(list) {
    if (!list || !list.length) {
      return list;
    }
    let cmp = this.comparator;

    for (let i = 1; i < list.length; ++i) {
      for (let j = i; j > 0; --j) {
        if (cmp.greaterThan(list[j], list[j - 1])) {
          break;
        }
        this._swap(list, j, j - 1);
      }
    }
    return list;
  }

  _swap(list, x, y) {
    if (x !== y) {
      let temp = list[x];
      list[x] = list[y];
      list[y] = temp;
    }
  }

}

export default InsertionSort;
