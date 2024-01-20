// 利用闭包实现私有化变量n
function createCounter(initVal) {
  let n = initVal || 0;
  return {
    inc: function() {
      return ++n;
    }
  }
}

const counter = createCounter(10);
console.log(counter.inc())
console.log(counter.inc())
console.log(counter.inc())