Promise.prototype.myFinally = function (finallyFn) {
  const prototypeObject = this.constructor; // this.constructor === Promise

  this.then(
    value => prototypeObject.resolve(finallyFn()).then(() => value),
    reason => prototypeObject.resolve(finallyFn()).then(() => { throw reason })
  )
}

const p = Promise.resolve('succuss');

p.then().catch().myFinally(() => {
  console.log('myFinally test');
})