// 深拷贝
function deepClone(obj) {
  let cloneObj;
  if(Object.prototype.toString.call(obj) === '[object Object]') {
    cloneObj = {};
    for(let i in obj) {
      if(Object.prototype.toString.call(obj[i]) === '[object Object]') {
        cloneObj = deepClone(obj[i]);
      } else {
        cloneObj[i] = obj[i];
      }
    }
  } else if(Object.prototype.toString.call(obj) === '[object Array]') {
    cloneObj = [];
    for(let i in obj) {
      if(Object.prototype.toString.call(obj[i]) === '[object Array]') {
        cloneObj = deepClone(obj[i]);
      } else {
        cloneObj[i] = obj[i];
      }
    }
  } else {
    cloneObj = obj;
  }
  return cloneObj;
}

function deepClone2(obj) {
  let cloneObj;
  if(typeof obj === 'object' && obj !== null) {
    cloneObj = obj instanceof Object ? {} : [];
    for(let i in obj) {
      // if(typeof obj[i] === 'object' && obj[i] !== null) {
      //   cloneObj[i] = deepClone2(obj[i]);
      // } else {
      //   cloneObj[i] = obj[i];
      // }
      cloneObj[i] = deepClone2(obj[i]);
    }
  } else {
    cloneObj = obj;
  }
  return cloneObj;
}