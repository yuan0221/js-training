// 题目：爬楼梯问题

function dfs(n) {
  if (n === 1 || n === 2) return n;

  return dfs(n - 1) + dfs(n - 2);
}

// dfs
function climbStairsByDFS(n) {
  const res = dfs(n);
  return res;
}
console.log(climbStairsByDFS(10));


// 动态规划
function climbStairsByDynamic(n) {
  if (n === 1 || n === 2) return n;

  let a = 1, b = 2;

  for (let i = 3; i <= n; i++) {
    let tmp = b;
    b = a + b;
    a = tmp;
  }

  return b;
}
console.log(climbStairsByDynamic(10));