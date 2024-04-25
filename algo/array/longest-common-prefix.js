function fn(arr) {
  let res = arr[0]

  for (item of arr) {
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== item[i]) {
        res = res.slice(0, i)
      }
    }
  }

  return res
}

console.log(fn(["flower", "flow", "flight"]))