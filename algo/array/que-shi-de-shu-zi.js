// 题目：给定一个排序数组，找出缺失的数字
// 变体：对于任意数组，先排序再做此题操作

function fn(arr) {
  for (let i = 0; i < arr.length; i++) {
    const value = i + arr[0]
    if (arr[i] !== value) {
      return value
    }
  }
}

console.log(fn([0, 1, 2, 3, 5]))
console.log(fn([3, 5]))