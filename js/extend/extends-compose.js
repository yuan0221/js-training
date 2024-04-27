/**
   * 组合继承（原型链继承 + 盗用构造函数继承）
   * 基本思想是：原型链实现方法共享，构造函数实现每个实例有自己的属性
  */
function SuperType(name) {
  this.colors = ['red', 'blue'];
  this.name = name;
}

SuperType.prototype.say = function () {
  console.log('hi!');
}

function SubType() {
  // 在子类中调用父类构造函数，call改变了this指向，SuperType在子类实例对象所在的上下文中运行了，
  // 在子类实例对象上，运行了父类初始化的代码，使得每个的实例有自己的属性了
  // 可以向父类构造函数传参
  SuperType.call(this, 'zhangsan');
}

SubType.prototype = new SuperType();

let instance = new SubType();
instance.colors.push('green');
let instance2 = new SubType();