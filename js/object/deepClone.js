// https://www.bilibili.com/video/BV14W4y1m79Q/?spm_id_from=333.999.0.0
// https://www.bilibili.com/video/BV1MU4y1i7ku/?spm_id_from=333.999.0.0
export function deepClone(source) {
  let target = createObjectFromSameClassObject(source);
  let map = new Map();
  map.set(source, target);
  let stack = [{target, source}]; // 任务队列
  while(stack.length) {
    const {target, source} = stack.pop();
    for(let property of Object.getOwnPropertyNames(source)) {
      let descriptor = Object.getOwnPropertyDescriptor(source, property);
      if(descriptor.hasOwnProperty('value')) {
        if(typeof source[property] === 'function' || typeof source[property] === 'object' && source[property] !== null) {
          if(map.has(source[property])) {
            descriptor.value = map.get(source[property]);
          } else {
            descriptor.value = createObjectFromSameClassObject(source[property]);
            map.set(source[property], descriptor.value);
            stack.push({target: descriptor.value, source: source[property]}); // push一个任务
          }
        } else {
          descriptor.value = source[property];
        }
        Object.defineProperty(target, property, descriptor);
      } else {
        Object.defineProperty(target, property, descriptor);
      }
    }

    // TODO: 业务一般用不到
    if(Object.isFrozen(source)) {
      Object.freeze(target);
    } else if(Object.isSealed(source)) {
      Object.seal(target);
    } else if(!Object.isExtensible(source)) {
      Object.preventExtensions(target);
    }
  }
  return target;
}


let classes = [
  {
    check(source, type, toStringResult, prototype) {
      return prototype === Array.prototype && toStringResult === '[object Array]';
    },
    create(source) {
      return source.slice();
    }
  },
  {
    check(source, type, toStringResult, prototype) {
      return prototype === String.prototype && toStringResult === '[object String]';
    },
    create(source) {
      return new String(source.valueOf());
    }
  },
  {
    check(source, type, toStringResult, prototype) {
      return type === 'function';
    },
    create(source) {
      return function(...args) {
        return source.call(this, ...args);
      }
    }
  },
]


function createObjectFromSameClassObject(source) {
  let target;
  let type = typeof source;
  let toStringResult = Object.prototype.toString.call(source);
  let prototype = Object.getPrototypeOf(source);

  for(let {check, create} of classes) {
    if(check(source, type, toStringResult, prototype)) {
      return create(source);
    }
  }

  return target = Object.create(
    Object.getPrototypeOf(source)
  );
}

export function registerClass(check, create) {
  classes.push({check, create});
}