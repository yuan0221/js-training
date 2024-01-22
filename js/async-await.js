// async/await 是genarate，promise的语法糖

const sleep = (text) => new Promise(resolve => setTimeout(() => resolve(text), 500));

function* generate() {
  const res1 = yield sleep('a');
  const res2 = yield sleep(res1 + 'b');
  const res3 = yield sleep(res2 + 'c');

  console.log(res3); // abc
}

function autoExcuteGenerate(generate) {
  const ge = generate();

  function dfs(text) {
    const result = ge.next(text);
    if(!result.done) result.value.then(res => dfs(res)); // result.value 是 Promise { <pending> }
  }

  dfs();
} 

autoExcuteGenerate(generate);