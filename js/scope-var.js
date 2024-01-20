// arr数组中的函数携带了执行环境，即是这里的变量i
// var声明的变量会穿透for，var声明的是所在函数count的作用域
function count() {
  let arr = [];
  for (var i = 1; i <= 3; i++) {
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
console.log(rs0(), rs1(), rs2()); //16 16 16
