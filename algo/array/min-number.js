// 题目： 数组中的最小数字

function minNumber(arr) {
  let res = Infinity

  for (item of arr) {
    if (item < res) {
      res = item
    }
  }

  return res
}

console.log(minNumber([12, 3, 0, 45, -2]))