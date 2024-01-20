// 原生call、apply、bind用法
const obj = {
  a: 1
}

function fn(a, b) {
  console.log(this);
}

fn(); // global
fn.call(obj, 1, 2); // obj
fn.apply(obj, [1, 2]); // obj
const bindFn = fn.bind(obj, 1, 2); 
bindFn(); // obj


console.log(new Array(100).fill('-').join(''));




// 实现call、apply、bind
let Person = {
  name: 'Tom',
  say() {
    console.log(`我叫${this.name}`)
  }
}
Person1 = {
  name: 'Tom1'
}

Function.prototype.myCall = function (context, ...args) {
  // context: Person1
  // this: Person.say
  // 给call的对象添加say方法，并执行
  context.say = this;
  return context.say(...args);
}
Person.say.myCall(Person1);


Function.prototype.myApply = function (context, args) {
  // context: Person1
  // this: Person.say
  // 给call的对象添加say方法，并执行
  context.say = this;
  return context.say(args);
}
Person.say.myApply(Person1);


Function.prototype.myBind = function (context, ...args) {
  // context: Person1
  // this: Person.say
  // 给call的对象添加say方法，返回一个方法
  context.say = this;
  return () => context.say(...args);
}
const sayFn = Person.say.myBind(Person1);
sayFn();
