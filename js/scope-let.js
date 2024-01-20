
// let 声明的是块级作用域
// 数组arr只携带了当次循环的let声明的局部变量i
function count() {
  let arr = [];
  for (let i = 1; i <= 3; i++) {
    arr.push(
      function () {
        return i * i;
      }
    )
  }
  return arr;
}

const rs = count();
const rs0 = rs[0]
const rs1 = rs[1]
const rs2 = rs[2]
console.log(rs0(), rs1(), rs2()); //1 4 9