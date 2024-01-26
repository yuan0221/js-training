// 冒泡
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let flag = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }

    if(!flag) break;
  }

  return arr;
}


console.log(bubbleSort([3, 4, 2, 1, 5, 3, 7, 0, 9]));