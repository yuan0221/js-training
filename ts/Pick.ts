interface IFoo {
  a: number
  b: number
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

const foo:MyPick<IFoo, 'a'> = {
  a: 1
} 