// 问题：移除对象中的空属性
function removeEmptyProperty(obj) {
  for ([k, v] of Object.entries(obj)) {
    if (v instanceof Object) {
      removeEmptyProperty(v)
    }
    if (v === null) Reflect.deleteProperty(obj, k);
  }
}

let obj = {
  a: 1,
  b: null,
  c: {
    d: 2,
    e: null
  }
}

removeEmptyProperty(obj);

console.log(obj);