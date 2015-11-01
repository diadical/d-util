import AbstractSort from './AbstractSort';

class SelectionSort extends AbstractSort {
  constructor(comparator) {
    super(comparator);
  }

  sort(list) {
    if (!list || !list.length) {
      return list;
    }
    let cmp = this.comparator;

    for (let i = 0; i < list.length - 1; ++i) {
      let minIdx = i;
      for (let j = i + 1; j < list.length; ++j) {
        if (cmp.lessThan(list[j], list[minIdx])) {
          minIdx = j;
        }
      }
      this._swap(list, i, minIdx);
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

export default SelectionSort;
