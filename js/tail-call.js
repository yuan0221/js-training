// https://www.ruanyifeng.com/blog/2015/04/tail-call.html

// 问题：实现1-100累加
function fn(n, sum = 0) {
  if(n === 0) return sum;
  return fn(n - 1, n + sum);
}

console.log(fn(100));