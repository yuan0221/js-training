// 问题：给一个有序数组 arr, 和 target，数组元素不重复，将 target 插入到数组，并且保持有序，
// 如果 target 在数组中有值，将其插入该值左边，求插入的位置

// 如果插入的元素数组中有，则位置是 middleIndex
// 如果插入的元素数组中没有，则位置是 i (没搜索到的时候，跳出循环，i 是大于target的第一个值的位置，j是小于target的第一个值的位置)
function binarySearchInsertPoint(arr, target) {
  let i = 0, j = arr.length - 1;

  while (i <= j) {
    let middleIndex = Math.floor((i + j) / 2);

    if (target > arr[middleIndex]) i = middleIndex + 1;
    else if (target < arr[middleIndex]) j = middleIndex - 1;
    else return middleIndex;
  }

  return i;
}


let arr = [1, 2, 4, 5, 6], target = 3;
console.log(binarySearchInsertPoint(arr, target));