// 题目：最大连续字符

function fn(arr) {
  let max = 1
  let count = 1
  let str = ''

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      max = Math.max(max, ++count)
      str = arr[i]
    } else {
      count = 1
    }
  }

  return [max, str]
}

const str = 'bacaabbbcccc';
const str2 = 'aa';
console.log(fn(str));
console.log(fn(str2));