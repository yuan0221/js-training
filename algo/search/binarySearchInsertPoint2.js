// 问题：给一个有序数组 arr, 和 target，数组元素有重复，将 target 插入到数组，并且保持有序，
// 如果 target 在数组中有值，将其插入该值左边，求插入的位置

function binarySearchInsertPoint2(arr, target) {
  let i = 0, j = arr.length - 1;

  while (i <= j) {
    let middleIndex = Math.floor((i + j) / 2);

    if (target > arr[middleIndex]) i = middleIndex + 1;
    else if (target < arr[middleIndex]) j = middleIndex - 1;
    else {
      // 如果有重复元素，从 middleIndex 向左遍历，找到重复元素的第一个元素位置
      for(let index = middleIndex; index >= 0; index--) {
        if(arr[index] !== arr[middleIndex]) return ++index;
      }
    };
  }

  return i;
}


let arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 9], target = 6;
console.log(binarySearchInsertPoint2(arr, target));