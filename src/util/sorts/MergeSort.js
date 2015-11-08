import AbstractSort from './AbstractSort';

class MergeSort extends AbstractSort {
  constructor(comparator) {
    super(comparator);
  }

  sort(list) {
    if (!list || !list.length) {
      return list;
    }
    // Create a temporary secondary buffer the same length as the input
    // do this once so many arrays won't be created and deleted
    let temp = new Array(list.length);
    this._mergesort(list, temp, 0, list.length - 1);
    return list;
  }

  _mergesort(list, temp, start, end) {
    if (start < end) {
      let cmp = this.comparator,
        mid = start + Math.floor((end - start) / 2);

      this._mergesort(list, temp, start, mid);
      this._mergesort(list, temp, mid + 1, end);
      this._copy(list, temp, start, end);

      let lidx = start,
        ridx = mid + 1;
      for (let i = start; i <= end; ++i) {
        if (ridx > end || (lidx <= mid && cmp.lessThan(temp[lidx], temp[ridx]))) {
          list[i] = temp[lidx++];
        }
        else {
          list[i] = temp[ridx++];
        }
      }
    }
  }

  _copy(source, target, start, end) {
    for (let i = start; i <= end; ++i) {
      target[i] = source[i];
    }
  }

}

export default MergeSort;
