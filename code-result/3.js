var foo = function(x, y) {
  return x - y
}
function foo(x, y) {
  return x + y
}
console.log('var 声明的函数不会被覆盖:', foo(1, 2)) // -1


var a = 0
var b = a++ && (++a + 3)
var c = ++a || ++b
console.log("短路运算符:", a, b, c) // 2 0 2


var count = 3
var user = {
  count: 1,
  getCount: function() {
    return () => {
      return this.count
    }
  }
}
var user_2 = {count: 2}
var func = user.getCount()
console.log('考闭包', func.call(user_2)) // 1


new Promise(function(resolve){
  console.log('promise打印顺序:', 1);
  Promise.resolve().then(() => console.log('promise打印顺序:', 2))
  resolve(new Promise(function(resolve){
    console.log('promise打印顺序:', 3);
    resolve(4)
  }))
}).then(res => {
  console.log('promise打印顺序:', res);
})
console.log('promise打印顺序:', 5);
// 1 3 5 2 4


var var_a = {
  a: 1,
  b: 2
}
var var_b = {
  a: var_a,
  b: 3
} 
var_c = var_b['a']
var_b['a'] = var_a = {a :5}
console.log('考对象引用:', var_c['a']); // 1
