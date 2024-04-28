function revert(num) {
  let num2Str = num + ''
  let res = num > 0 ? '' : '-'
  let index = num > 0 ? -1 : 0

  if (num2Str.includes('.')) {
    res = num2Str.split('.').map(item => revert(item)).join('.')
  } else {
    for (let i = num2Str.length - 1; i > index; i--) {
      res += num2Str[i]
    }
  }

  return Number(res)
}


console.log(revert(123))
console.log(revert(-123))
console.log(revert(-123.456))