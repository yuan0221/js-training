//  统计目标数字出现的次数

function fn(arr, target) {
  // 解法：借助对象数数
  let obj = {}

  for (item of arr) {
    obj[item] = (obj[item] || 0) + 1
  }

  for ([k, v] of Object.entries(obj)) {
    if (Number(k) === target) {
      return v
    }
  }
}

console.log(fn([4, 2, 3, 4, 4, 4, 5, 6, 6, 8], 4))