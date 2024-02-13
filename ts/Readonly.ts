interface IFoo {
  a: number
  b: number
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

const foo:MyReadonly<IFoo> = {
  a: 1,
  b: 2
}

// foo.a = 11 // 报错

export {}

