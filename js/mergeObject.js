// https://github.com/Sunny-117/js-challenges/issues/87#issuecomment-1703993681
function mergeObject(obj1, obj2) {
  for (let key in obj2) {
    if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
      obj1[key] = mergeObject(obj1[key], obj2[key])
    } else {
      obj1[key] = obj2[key]
    }
  }

  return obj1
}

var obj1 = {
  a: 1,
  b: { c: 2, d: 3 },
  e: 4,
  h: { i: 5 }
};

var obj2 = {
  a: 111,
  b: { c: 222, f: 333 },
  g: 444,
  h: 666
};

console.log(mergeObject(obj1, obj2))