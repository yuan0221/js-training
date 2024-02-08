Promise.prototype.myCatch = function (rejectFn) {
  return this.then(null, rejectFn);
}

const p = Promise.reject('a error');

p.then().myCatch(error => console.log(error));