// 题目： 缺失的数字

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