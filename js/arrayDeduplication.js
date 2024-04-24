// 问题：数组去重
function deduplication(arr) {
  return arr.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
      pre.push(cur)
    }
    return pre
  }, [])
}
const arr = [1, 2, 1, 3, 4];
console.log(deduplication(arr));



function deduplication2(arr) {
  let res = []

  for (item of arr) {
    if (!res.includes(item)) {
      res.push(item)
    }
  }

  return res
}
console.log(deduplication2(arr));