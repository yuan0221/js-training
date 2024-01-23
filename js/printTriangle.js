// 等腰三角形
function printTriangle(n) {
  for (let i = 0; i < n; i++) {
    let str = '';

    for (let j = 0; j < n - i - 1; j++) {
      str += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      str += '*';
    }

    console.log(str);
  }

}
printTriangle(3)


// 直角三角形
function printTriangle2(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';

    for (var j = n; j >= i; j--) {
      str += '';
    }
    for (let k = 1; k <= i; k++) {
      str += '*'
    }
    
    console.log(str + '\t');
  }
}
printTriangle2(3);