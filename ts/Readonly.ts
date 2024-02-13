interface IFoo {
  a: number
  b: number
}

type MyReadonly<T> = {
  readonly [p in keyof T]: T[p]
}

const foo:MyReadonly<IFoo> = {
  a: 1,
  b: 2
}

foo.a = 11

export {}

