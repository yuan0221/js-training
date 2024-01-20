// 递归实现二分查找
const arr = [1, 2, 3, 5, 7, 9, 18, 100];
const target = 9;

function fn(arr, target, start, end) {
  start = start >= 0 ? start : 0;
  end = end >= 0 ? end : arr.length;
  let midlleIndex = Math.floor((start + end) / 2);
  if (target === arr[midlleIndex]) {
    return midlleIndex;
  }
  else if (target < arr[midlleIndex]) {
    return fn(arr, target, start, midlleIndex - 1)
  }
  else if (target > arr[midlleIndex]) {
    return fn(arr, target, midlleIndex + 1, end)
  }
  else {
    return -1
  }
}

const r = fn(arr, target);
console.log(r);