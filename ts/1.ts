// 泛型 
// https://www.typescriptlang.org/docs/handbook/2/generics.html


// 使用 extends 对泛型参数 T 进行约束 
interface ILenth {
  length: number
}
function fn<T extends ILenth>(arg: T): T {
  console.log(arg.length)
  return arg;
}
fn({length: 1})



// 在泛型约束中使用泛型参数
function getProperty<Obj, K extends keyof Obj>(obj: Obj, key: K) {
  return obj[key];
}
getProperty({a: 1, b: 2}, 'a')



// keyof
type Point = {
  x: number;
  y: number
}
type P = keyof Point
const p: P = 'x'



// typeof
function fn2() {
  return {
    x: 1,
    y: 2
  }
}
type p = ReturnType<typeof fn2>



// 索引访问类型
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
type Person = typeof MyArray[number]
type name = Person['name']
type age = Person['age']



// 条件类型
interface IdLabel {
  id: number
}
interface NameLabel {
  name: string
}
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel




export {}



