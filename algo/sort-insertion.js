// 插入排序
// 类似洗扑克原理，在未排序区间找一个基准元素，将基准元素与已排序区间元素逐个对比，将其插入到相应位置

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let base = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > base) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = base;
  }

  return arr;
}


console.log(insertionSort([3, 4, 2, 1, 5, 3, 7, 0, 9]));