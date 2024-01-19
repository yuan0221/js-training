// https://github.com/Sunny-117/js-challenges/issues/41#issue-1434221423
let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 0 },
]

function list2tree(rootList, id, list) {

  for (item of rootList) {
    if (item.pid === id) list.push(item);
  }

  for (i of list) {
    i.children = [];
    list2tree(rootList, i.id, i.children);
  }

  return list;
}


console.log(JSON.stringify(list2tree(arr, 0, [])));