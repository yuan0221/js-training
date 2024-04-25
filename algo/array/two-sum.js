// 题目：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数

function fn(arr, target) {
  let res = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push([arr[i], arr[j]])
      }
    }
  }

  return res
}

console.log(fn([2, 7, 11, 15, 3], 18))


// 对于排序数组，解法是双指针
function fn2(arr, target) {
  let l1 = 0
  let l2 = arr.length - 1

  while (l1 < l2) {
    if (arr[l1] + arr[l2] > target) {
      l2--
    } else if (arr[l1] + arr[l2] < target) {
      l1++
    } else {
      return [arr[l1], arr[l2]]
    }
  }
}

console.log(fn2([2, 3, 4, 11, 15, 16], 18))