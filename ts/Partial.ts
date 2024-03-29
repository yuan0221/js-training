// Partial 将 T 中的属性变为可选

interface IFoo {
  a: number
  b: number
}

type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

// const foo: Partial<IFoo> = { a: 1 }
// 等于
const foo: MyPartial<IFoo> = { a: 1 }

export {}