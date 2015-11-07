import AbstractSort from './AbstractSort';

class QuickSort extends AbstractSort {
  constructor(comparator) {
    super(comparator);
  }

  sort(list) {
    if (!list || !list.length) {
      return list;
    }
    this._quicksort(list, 0, list.length - 1);
    return list;
  }

  _quicksort(list, start, end) {
    if (start < end) {
      // choose a random pivot
      // Note: Math.random does not produce cryptographically strong random numbers
      let cmp = this.comparator,
        pivot = start + Math.floor(Math.random() * (end - start)),
        larger = end - 1;

      this._swap(list, pivot, end);
      pivot = end;
      for (let i = start; i <= larger; ++i) {
        if (cmp.compare(list[pivot], list[i]) <= 0) {
          // don't swap with another element that is higher than pivot
          while (i < larger && cmp.compare(list[pivot], list[larger]) <= 0) {
            --larger;
          }
          this._swap(list, i, larger--);
        }
      }
      ++larger;
      this._swap(list, pivot, larger);
      pivot = larger;

      this._quicksort(list, start, pivot - 1);
      this._quicksort(list, pivot + 1, end);
    }
  }

}

export default QuickSort;
