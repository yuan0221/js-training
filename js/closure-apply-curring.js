// 利用闭包实现函数柯里化
function createPow(n) {
  return function (x) {
    return Math.pow(x, n);
  } 
}

const pow2 = createPow(2);
const pow3 = createPow(3);

console.log(pow2(5))
console.log(pow2(6))
console.log(pow3(3))
console.log(pow3(5))