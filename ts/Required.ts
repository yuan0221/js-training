interface IFoo {
  a?: number
  b?: number
}

type MyRequired<T> = {
  [p in keyof T]-?: T[p]
}

// const foo: Required<IFoo> = {
//   a: 2,
//   b: 3
// }
const foo: MyRequired<IFoo> = {
  a: 2,
  b: 3
}

