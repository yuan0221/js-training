function deduplication(arr) {
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  }, [])
}

const arr = [1, 2, 1, 3, 4];
console.log(deduplication(arr));