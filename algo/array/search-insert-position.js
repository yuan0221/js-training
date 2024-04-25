// 题目： 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

function fn(arr, target) {
  let l1 = 0;
  let l2 = arr.length - 1

  while (l1 <= l2) {
    let m = l1 + ((l2 - l1) >> 1)

    if (target === arr[m]) {
      return m
    }
    if (target > arr[m]) {
      l1 = m + 1
    } else {
      l2 = m - 1
    }
  }

  return l1
}

console.log(fn([1, 3, 5, 6], 5))