/**
   * 类继承
   * 
  */
class Person {
  // 构造器
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 

  // 实例方法
  say() {
    console.log('hi!');
  }

  // 静态属性
  static info = 'xinxi';

  // 静态方法
  static eat () {
    console.log('eat!');
  }
}

// extends可以继承拥有constructor的class，和拥有原型的构造函数
class Man extends Person {
  constructor (sex) {
    // 调用父类构造函数，并将返回的实例赋值给this
    super();
    this.sex = sex;
  }
  jump() {
    console.log('jump!');
  }
}

const p = new Man('man');