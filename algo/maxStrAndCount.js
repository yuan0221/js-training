// 在字符串找出出现相同字符最多的字符和出现的次数
function fn(str) {
  let o = {};

  for (s of str) {
    o[s] = (o[s] || 0) + 1;
  }

  let max = 0;
  for ([k, v] of Object.entries(o)) {
    if (v > max) max = v;
  }

  let res = [];
  for ([k, v] of Object.entries(o)) {
    if (v === max) res.push([k, v]);
  }

  return res;
}


const str = 'bacaabbbcccc';
console.log(fn(str));




function fn2(str) {
  return str.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {})
}

console.log(fn2(str));
