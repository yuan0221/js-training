/**
 * 原型继承
 * 
*/
// 父类实例属性
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 父类实例方法
Person.prototype.say = function () {
  console.log('hi!');
}

// 父类静态方法
Person.eat = function () {
  console.log('eat!');
}

// 子类实例属性
function Man(height) {
  this.height = height;
}

// 子类继承父类
Man.prototype = new Person('zhangsan', 18);

// 实例化子类
const m = new Man(175);


/**
 * 原型继承的问题
 * 
*/
// 第一个显著的问题是，new 子类的时候，不能把参数传给父类

// 第二个问题是：原型中的属性(js语言属性+方法统称属性)的共享问题，而一般我们不同的实例，
// 方法共享，属性会有自己的属性，所以属性一般在构造函数定义，方法在原型中定义
// 让子类的原型等于父类的实例的时候，相当于给子类添加了原型属性
// 这样一来，原先的实例属性摇身一变成了原型属性
function SuperType() {
  this.colors = ['red', 'blue'];
}

function SubType () {}

SubType.prototype = new SuperType();

let instance = new SubType();
instance.colors.push('green');
let instance2 = new SubType();