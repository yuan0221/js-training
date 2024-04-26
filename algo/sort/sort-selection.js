// 选择排序
// 两轮循环
// 每次从未排序区间中找到最小值，放到已排序区间末尾
function selectionSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) minIndex = j;
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

console.log(selectionSort([3, 4, 2, 1, 5, 3, 7, 0, 9]));