// 立即执行函数设置了块级作用域
function count() {
  let arr = [];
  for (var i = 1; i <= 3; i++) {
    arr.push(
      (function (n) {
        return function () {
          return n * n;
        }
      })(i)
    )
  }
  return arr;
}

const rs = count();
const rs0 = rs[0]
const rs1 = rs[1]
const rs2 = rs[2]
console.log(rs0(), rs1(), rs2()); //1 4 9