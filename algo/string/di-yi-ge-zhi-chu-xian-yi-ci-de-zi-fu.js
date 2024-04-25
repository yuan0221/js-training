// 题目：第一个只出现一次的字符

function firstShowOnceStr(str) {
  // 解法：利用对象数数
  let obj = {}

  for (item of str) {
    obj[item] = (obj[item] || 0) + 1
  }

  for ([k, v] of Object.entries(obj)) {
    if (v === 1) {
      return k
    }
  }
}


console.log(firstShowOnceStr('assddffgg')) // a
console.log(firstShowOnceStr('assdffgg')) // a