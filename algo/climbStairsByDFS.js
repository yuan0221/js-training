function dfs(n) {
  if (n === 1 || n === 2) return n;

  return dfs(n - 1) + dfs(n - 2);
}

// 爬楼梯
function climbStairsByDFS(n) {
  const res = dfs(n);
  return res;
}


console.log(climbStairsByDFS(10));