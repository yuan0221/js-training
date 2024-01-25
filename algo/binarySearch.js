// dfs
const arr = [1, 2, 3, 5, 7, 9, 18, 100];
const target = 9;

function binarySearchByDFS(arr, target, start = 0, end = arr.length) {
  let midlleIndex = Math.floor((start + end) / 2);
  
  if (target === arr[midlleIndex]) {
    return midlleIndex;
  } 
  else if (target < arr[midlleIndex]) {
    return binarySearchByDFS(arr, target, start, midlleIndex - 1);
  } 
  else if (target > arr[midlleIndex]) {
    return binarySearchByDFS(arr, target, midlleIndex + 1, end);
  }
  else {
    return -1;
  }
}

console.log(binarySearchByDFS(arr, target));


// 双指针
function binarySearchByDoublePointer(arr, target) {
  let i = 0, j = arr.length - 1; // 初始化双指针
  
  // while 循环开启搜索区间，当区间为空时跳出
  while(i <= j) {
    let middleIndex = Math.floor((i + j) / 2);

    if(target > arr[middleIndex]) i = middleIndex + 1;
    else if(target < arr[middleIndex]) j = middleIndex - 1;
    else return middleIndex;
  }

  return -1;
}

console.log(binarySearchByDoublePointer(arr, target));