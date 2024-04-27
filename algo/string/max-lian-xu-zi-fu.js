// 题目：最大连续字符

function fn(arr) {
  let str = ''
  let max = 0
  let count = 1 // 第一个肯定连续

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
const str3 = 'abc';
console.log(fn(str));
console.log(fn(str2));
console.log(fn(str3));