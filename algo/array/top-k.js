// 题目： 返回最小的k个数

function fn(arr, k) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr.slice(0, k)
}

console.log(fn([2, 5, 7, 4], 2))