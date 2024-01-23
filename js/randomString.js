// 问题：随机生成字符串
// toString 转为36进制（0-9，a-z），再截取后八位
function randomString() {
  return Math.random().toString(36).slice(-8);
}

console.log(randomString());