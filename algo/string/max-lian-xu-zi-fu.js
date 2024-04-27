// 题目：最大连续字符

function fn(arr) {
  let max = Number.MIN_VALUE
  let count = 1
  let str = ''

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      if (++count > max) {
        max = count
      }
      str = arr[i]
    } else {
      count = 1
    }
  }

  return [str, max]
}

const str = 'bacaabbbcccc';
const str2 = 'aa';
console.log(fn(str));
console.log(fn(str2));