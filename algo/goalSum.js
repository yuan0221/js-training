// 给定一个整数数组 nums 和一个目标值 taget，请你在该数组中找出和为目标值的那 两个 整数，
// 并返回他们的数组下标。
// 时间复杂度：O(n²)
// 空间复杂度：O(1)
function fn(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j]
    }
  }
}

console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))


// 时间复杂度：O(n)
// 空间复杂度：O(n)
function fn2(arr, target) {
  let obj = {};

  for(let i = 0; i < arr.length; i++) {
    if(obj[target - arr[i]]) return [obj[target - arr[i]], i];
    else obj[arr[i]] = i;
  }
}

console.log(fn2([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))