// 模式实现
let blacklist = ['111'];

// https://juejin.cn/post/6844903874214494222
function proxyCallPhone(phone) {
  console.log('电话正在接入...')
  if (blacklist.includes(phone)) console.log('黑名单');
  else callPhone(phone);
}

function callPhone(phone) {
  console.log('接听电话：' + phone);
}

proxyCallPhone('222');



// proxy
let person = {
  name: '以乐之名'
}

const proxyPerson = new Proxy(person, {
  get(target, k, v) {
    console.log(target, k, v)
    return target[k];
  },
  set(target, k, v) {
    console.log(target, k, v)
    target[k] = v;
  }
}) 

proxyPerson.age = 18;
console.log(proxyPerson.name);