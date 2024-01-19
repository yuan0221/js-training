// https://github.com/Sunny-117/js-challenges/issues/40#issuecomment-1378268425
const tree = [
  {
    id: '1',
    name: '父节点1',
    children: [
      {
        id: '1-1',
        name: '子节点1-1',
        children: [
          {
            id: '1-1-1',
            name: '子节点1-1-1'
          },
          {
            id: '1-1-2',
            name: '子节点1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '父节点2',
    children: [
      {
        id: '2-1',
        name: '子节点2-1'
      }
    ]
  }
]

function tree2list(data) {
  let res = [];

  function dfs(tree) {
    for(item of tree) {
      if(item.children) {
        dfs(item.children);
        delete item.children;
      }
      res.push(item);
    }
  } 

  dfs(tree);

  return res;
}

console.log(tree2list(tree));