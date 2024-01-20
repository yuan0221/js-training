// 题目描述：如果 a 是 b 的实例，函数返回 true，否则返回 false

// while
function myInstanceofByWhile(a, b) {
  // 实例的__proto__属性等于原型的 prototype
  const _a = a.__proto__;
  const _b = b.prototype;

  while(_a) {
    if(_a === _b) return true;
    _a = _a.__proto__;
  }

  return false;
}


function Foo() {}
const f = new Foo();
console.log(myInstanceofByWhile(f, Foo)); // true



// dfs
function myInstanceofByDfs(a, b) {
  if(!a) return false;

  return a.__proto__ === b.prototype || myInstanceofByDfs(a.__proto__, b);
}

function Bar() {}
const b = new Bar();
const c = 1;
console.log(myInstanceofByDfs(b, Bar)); // true
console.log(myInstanceofByDfs(c, Bar)); // false