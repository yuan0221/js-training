// 全排列

function backtrack(state, choices, selected, res) {
  // 检查是否为解
  if (state.length === choices.length) {
    // 记录解
    res.push([...state]);
    return;
  }

  for (let i = 0; i < choices.length; i++) {
    // 剪枝：检查选择是否合法
    if (!selected[i]) {
      // 尝试：做出选择，更新状态
      selected[i] = true;
      state.push(choices[i]);
      // 进行下一轮选择
      backtrack(state, choices, selected, res);
      // 回退：撤销选择，回退到上一次选择的状态
      selected[i] = false;
      state.pop();
    }
  }
}

function permutation(arr) {
  let state = [];
  let choices = arr;
  let selected = new Array(arr.length).fill(false);
  let res = [];

  backtrack(state, choices, selected, res);

  return res;
}


console.log(permutation([1, 1, 3]));