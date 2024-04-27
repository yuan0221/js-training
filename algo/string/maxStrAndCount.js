// 题目：在字符串找出出现相同字符最多的字符和出现的次数
function fn(str) {
  // const o = getObjByStr(str)
  const o = getObjByStr2(str)
  let key = ''
  let max = Number.MIN_VALUE

  for (let k in o) {
    if (o[k] > max) {
      max = o[k]
      key = k
    }
  }

  return [key, max]
}
const str = 'bacaabbbcccc';
console.log(fn(str)); // [ 'c', 5 ]


// 通过对象数数
function getObjByStr(str) {
  let o = {};

  for (s of str) {
    o[s] = (o[s] || 0) + 1;
  }

  return o
}

// reduce 迭代
function getObjByStr2(str) {
  return str.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {})
}
console.log(getObjByStr2(str));
