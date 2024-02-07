function myResolve(value) {
  if(Object.prototype.toString.call(value) === 'object Promise') return value;

  if(value && typeof value.then === 'function') {
    return new Promise((resolve, reject) => {
      // value.then(resolve).catch((error) => reject(error))
      value.then(resolve, reject)
    })
  }

  return new Promise(resolve => resolve(value));
}


myResolve(11111).then(result => console.log(result));
myResolve(Promise.resolve('456')).then(result => console.log(result));
myResolve({then: function() {console.log('theable')}}).then(result => console.log(result));