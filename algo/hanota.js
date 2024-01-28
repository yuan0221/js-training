
function move(src, tar) {
  tar.push(src.pop());
}

// f(i) 问题
function dfs(i, src, buf, tar) {
  if (i === 1) {
    move(src, tar);
    return;
  }

  dfs(i - 1, src, tar, buf);
  move(src, tar);
  dfs(i - 1, buf, src, tar);
}

// 求解汉诺塔问题：将 A数组元素 借助 B 移动到 C，每次只移动一个元素，移动之后元素顺序不变
function solveHanota(A, B, C) {
  dfs(A.length, A, B, C);

  console.log(A, B, C);
}

solveHanota([1, 2, 3, 4, 5], [], []);