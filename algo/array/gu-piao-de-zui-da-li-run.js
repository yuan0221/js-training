// 题目： 买卖的最佳时刻

function fn(arr) {
  let max = Number.MIN_VALUE
  let start = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > max) {
        max = arr[j] - arr[i]
      }
      start = i
      end = j
    }
  }

  return [max, start, end]
}

console.log(fn([8, 12, 15, 7, 3, 10]))