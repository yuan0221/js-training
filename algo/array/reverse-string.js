// 题目： 反转数组中的字符串

function fn(arr) {
  // 解法：双指针
  for (let l1 = 0, l2 = arr.length - 1; l1 < l2; ++l1, --l2) {
    [arr[l1], arr[l2]] = [arr[l2], arr[l1]]
  }

  return arr
}


console.log(fn(["h", "e", "l", "l", "o"]))