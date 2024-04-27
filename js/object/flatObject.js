// dfs
function flatObjectByDfs(obj) {
  let res = {};

  function dfs(o) {
    for(let k in o) {
      if(Object.prototype.toString.call(o[k]) === '[object Object]') dfs(o[k]);
      else res[k] = o[k];
    }
  }

  dfs(obj);

  return res;
}

console.log(flatObjectByDfs({
  a: 1,
  b: {
    c: 2, 
    d: { 
      e: 3
    }
  },
}))


// stack
function flatObjectByStack(obj) {
  const stack = Object.entries(obj);
  let res = {};

  while(stack.length) {
    const [k, v] = stack.pop();
    if(Object.prototype.toString.call(v) === '[object Object]') stack.push(...Object.entries(v))
    else res[k] = v;
  }

  return res;
}

console.log(flatObjectByStack({
  a: 1,
  b: {
    c: 2, 
    d: { 
      e: 3
    }
  },
}))