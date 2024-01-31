// 爬楼梯
function climbStairsByDynamic(n) {
  if (n === 1 || n === 2) return n;

  let a = 1, b = 2;

  for(let i = 3; i <= n; i++) {
    let tmp = b;
    b = a + b;
    a = tmp;
  }

  return b;
}


console.log(climbStairsByDynamic(100));