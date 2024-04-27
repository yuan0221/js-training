// 深拷贝
function deepClone(obj) {
  let cloneObj

  if (typeof obj === 'object' && obj !== null) {
    cloneObj = obj instanceof Object ? {} : []

    for (let key in obj) {
      cloneObj[key] = deepClone(obj[key])
    }
  } else {
    cloneObj = obj
  }

  return cloneObj
}