interface IFoo {
  a?: number
  b?: number
}

type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}

// const foo: Required<IFoo> = {
//   a: 2,
//   b: 3
// }
const foo: MyRequired<IFoo> = {
  a: 2,
  b: 3
}

export {}

