// 大顶堆
// 出堆操作

function siftDown(arr, n, i) {
  while(true) {
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    let max = i;

    if(arr[l] > arr[max] && l < n) max = l;
    if(arr[r] > arr[max] && r < n) max = r;

    if(max === i) break; // i 就是最大的，说明符合条件，无需交换

    [arr[i], arr[max]] = [arr[max], arr[i]]; // 做交换
    
    i = max; // 继续开启循环进行堆化
  }
}


function heapSort(arr) {
  const endIndex = arr.length - 1;

  // 利用遍历建堆，堆化除过叶子节点之外的所有节点
  for(let i = Math.floor((endIndex - 1) / 2); i >= 0; i--) {
    siftDown(arr, arr.length, i);
  }

  for(let i = endIndex; i > 0; i--) {
    // 出堆：
    // 交换堆顶和堆底元素
    [arr[0], arr[i]] = [arr[i], arr[0]]; 
    // 自顶向下堆化
    siftDown(arr, i, 0);
  }

  return arr;

}

console.log(heapSort([3, 4, 2, 1, 5, 3, 7, 0, 9]));