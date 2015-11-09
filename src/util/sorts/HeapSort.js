import AbstractSort from './AbstractSort';

class HeapSort extends AbstractSort {
  constructor(comparator) {
    super(comparator);
  }

  sort(list) {
    if (!list || !list.length) {
      return list;
    }

    let cmpReverse = this.comparator.reverseOrder(),
      len = list.length - 1;
    // find the parent of the last item in the array and heapify everything to root
    for (let idx = Math.floor((len - 1) / 2); idx >= 0; --idx) {
      this._siftDown(list, cmpReverse, idx, len);
    }
    for (let end = len; end > 0;) {
      this._swap(list, 0, end);
      this._siftDown(list, cmpReverse, 0, --end);
    }

    return list;
  }

  _siftDown(list, cmp, idx, end) {
    let leftIndex = 2 * idx + 1,
      rightIndex = leftIndex + 1,
      biggerIndex;

    if (rightIndex <= end) {
      if (cmp.compare(list[rightIndex], list[leftIndex]) < 0) {
        biggerIndex = rightIndex;
      }
      else {
        biggerIndex = leftIndex;
      }
    }
    else if (leftIndex <= end) {
      biggerIndex = leftIndex;
    }

    if (biggerIndex !== undefined) {
      if (cmp.compare(list[biggerIndex], list[idx]) < 0) {
        this._swap(list, idx, biggerIndex);
        this._siftDown(list, cmp, biggerIndex, end);
      }
    }
  }
}

export default HeapSort;
