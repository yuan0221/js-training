let rootArr = [1, [2, 3], [4, [5, 6]]];

// dfs
function arrFlatByDfs(rootArr) {
  let res = [];

  function dfs(arr) {
    for (item of arr) {
      if (Array.isArray(item)) dfs(item);
      else res.push(item);
    }
  }

  dfs(rootArr);

  return res;
}

console.log(arrFlatByDfs(rootArr));



// reduce
function arrFlatByReduce(rootArr) {
  return rootArr.reduce((pre, cur) => {
    if (Array.isArray(cur)) pre.push(...arrFlatByReduce(cur));
    else pre.push(cur);

    return pre;
  }, [])
}
console.log(arrFlatByReduce(rootArr));


// stack
function flatArrayByStack(rootArr) {
  const stack = rootArr;
  let res = [];

  while (stack.length) {
    const item = stack.shift();
    if (Object.prototype.toString.call(item) === '[object Array]') stack.push(...item);
    else res.push(item);
  }

  return res;
}
console.log(flatArrayByStack(rootArr));