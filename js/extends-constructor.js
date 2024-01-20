/**
   * 盗用构造函数继承
   * 
  */
function SuperType(name) {
  this.colors = ['red', 'blue'];
  this.name = name;
}

function SubType() {
  // 在子类中调用父类构造函数，call改变了this指向，SuperType在子类实例对象所在的上下文中运行了，
  // 在子类实例对象上，运行了父类初始化的代码，使得每个的实例有自己的属性了
  // 可以向父类构造函数传参
  SuperType.call(this, 'zhangsan');
}

let instance = new SubType();
instance.colors.push('green');
let instance2 = new SubType();


/**
 * 盗用构造函数的问题
 *
*/
// 不使用prototype时，纯构造函数+call，方法不能共享